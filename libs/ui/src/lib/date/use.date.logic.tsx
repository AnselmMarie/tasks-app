import { useEffect, useState } from 'react';

import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { DateTime } from 'luxon';
import { Control, useController, useForm } from 'react-hook-form';

const useDateLogic = (
  control: Control | null,
  defaultValue: string,
  name: string,
  minDate: Date,
  isTimeCleared: boolean,
  isEndDateTime: boolean
) => {
  const [openSheet, setOpenSheet] = useState(false);
  const { control: internalControl } = useForm();
  const currentControl = control || internalControl;

  const { field } = useController({
    control: currentControl,
    defaultValue,
    name,
  });

  // @todo I'll fix this later
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setISOFormat = (value: any) => {
    return value ? value : DateTime.fromJSDate(minDate).toISO();
  };

  const [date, setDate] = useState({
    iso: setISOFormat(field?.value),
    formatted: field?.value ? new Date(field?.value) : new Date(),
  });

  const [revertDate, setRevertDate] = useState({
    iso: setISOFormat(field?.value),
    formatted: field?.value ? new Date(field?.value) : new Date(),
  });

  const isMinDateGreater = isEndDateTime
    ? (DateTime.fromJSDate(minDate)?.toISO() || '') > date.iso
    : false;

  const datePickChange = (event: DateTimePickerEvent, date?: Date) => {
    const {
      nativeEvent: { timestamp },
    } = event;
    const dt = DateTime.fromMillis(timestamp);

    setDate({
      iso: dt.toISO(),
      formatted: new Date(timestamp),
    });
  };

  const acceptChanges = () => {
    field?.onChange(date?.iso);
    setOpenSheet(!openSheet);
  };

  const cancelData = () => {
    setDate(revertDate);
    setOpenSheet(false);
  };

  const openSheetFn = () => {
    setOpenSheet(true);
  };

  const clearData = () => {
    field?.onChange(null);
    setDate({
      iso: DateTime.now().toISO(),
      formatted: new Date(),
    });
  };

  useEffect(() => {
    if (openSheet) {
      setRevertDate(date);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openSheet]);

  useEffect(() => {
    if (isMinDateGreater) {
      setDate({
        iso: DateTime.fromJSDate(minDate).plus({ days: 1 })?.toISO(),
        formatted: DateTime.fromJSDate(minDate).plus({ days: 1 }).toJSDate(),
      });
    }
  }, [isMinDateGreater, minDate]);

  useEffect(() => {
    if (isTimeCleared && isEndDateTime) {
      clearData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimeCleared, isEndDateTime]);

  return {
    date,
    field,
    openSheet,
    onOpenSheet: openSheetFn,
    onDatePickChange: datePickChange,
    onAcceptChanges: acceptChanges,
    onCancelData: cancelData,
    onClearData: clearData,
  };
};

export default useDateLogic;
