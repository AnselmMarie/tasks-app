import { ReactElement, useId } from 'react';

import DateTimePicker from '@react-native-community/datetimepicker';
import { fullDateUtil } from '@tasks-app/utils';
import { Input, Label, Text, View } from 'tamagui';

import { ButtonColorTypeEnum, UiButton } from '../button';
import { UiIcon } from '../icon';
import { SheetTypeEnum, UiSheet } from '../sheet';

import { DateModeEnum } from './date.enum';
import { DateProps } from './date.interface';
import useDateLogic from './use.date.logic';

const DateTimeView = ({
  label,
  name = '',
  helper = '',
  mode = DateModeEnum.DATE,
  control = null,
  errorMessage = '',
  defaultValue = '',
  minDate = new Date(),
  maxDate = undefined,
  isDisabled = false,
  isRequired = false,
  isTimeCleared = false,
  isEndDateTime = false,
}: DateProps): ReactElement => {
  const id = `${name}${useId()}`;
  const {
    date,
    field,
    openSheet,
    onDatePickChange,
    onAcceptChanges,
    onOpenSheet,
    onCancelData,
    onClearData,
  } = useDateLogic(control, defaultValue, name, minDate, isTimeCleared, isEndDateTime);

  return (
    <View>
      <View position="relative">
        {isDisabled ? (
          <View flex={1} width="100%" height="100%" zIndex={1} position="absolute" />
        ) : null}
        <Label>{!isRequired ? label : `${label}*`}</Label>
        <View flexDirection="row">
          <View
            width="70%"
            position="relative"
            marginRight="$3"
            marginBottom={helper || errorMessage ? '$2' : '$5'}
          >
            <UiButton
              zIndex="$2"
              width="100%"
              height="100%"
              top={0}
              left={0}
              position="absolute"
              chromeless="all"
              onPress={onOpenSheet}
            />
            <UiIcon
              name="IconCalendar"
              size="$1"
              position="absolute"
              zIndex="$1"
              right={10}
              top={12}
            />
            <Input
              id={id}
              paddingRight="$6"
              disabled={isDisabled}
              backgroundColor={isDisabled ? '$gray8' : undefined}
              value={field?.value ? fullDateUtil(field?.value) : 'No Date'}
              readOnly
            />
          </View>
          <UiButton
            width="25%"
            color={ButtonColorTypeEnum.DANGER}
            isDisabled={!field?.value}
            onPress={onClearData}
          >
            Clear
          </UiButton>
        </View>
        {helper ? <Text marginBottom={errorMessage ? '$2' : '$3'}>{helper}</Text> : null}
        {errorMessage ? (
          <Text marginBottom="$3" color="$red9">
            {errorMessage}
          </Text>
        ) : null}
      </View>

      <UiSheet
        sheetType={SheetTypeEnum.MODAL}
        hideSheetX
        openModal={openSheet}
        onModalChange={onCancelData}
      >
        <View
          width="100%"
          padding="$4"
          backgroundColor="$color4"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Text fontWeight="bold" fontSize="$3" theme="default" onPress={onAcceptChanges}>
            Accept
          </Text>
          <Text fontWeight="bold" fontSize="$3" theme="default" onPress={onCancelData}>
            Cancel
          </Text>
        </View>
        <DateTimePicker
          mode={mode}
          display="spinner"
          value={date?.formatted}
          minimumDate={minDate}
          maximumDate={maxDate}
          onChange={onDatePickChange}
        />
      </UiSheet>
    </View>
  );
};

export default DateTimeView;
