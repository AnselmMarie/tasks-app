import { GenericObjectInter } from '@tasks-app/models';

interface CreateSelectOptionUtilProps {
  label:
    | string
    | number
    | boolean
    | (string | number | GenericObjectInter)[]
    | Record<string, unknown>
    | null;
  value:
    | string
    | number
    | boolean
    | (string | number | GenericObjectInter)[]
    | Record<string, unknown>
    | null;
}

/** @todo need to fix the readonly issues */

export const createSelectOptionUtil = (
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  data: ReadonlyArray<GenericObjectInter> = [],
  label = '',
  value = '',
  addEmpty = true
): CreateSelectOptionUtilProps[] => {
  const selectStoryOption = data.map(
    // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
    (el: Readonly<GenericObjectInter>): CreateSelectOptionUtilProps => {
      return { label: el?.[label], value: el?.[value] };
    }
  );

  if (addEmpty) {
    selectStoryOption.unshift({
      label: 'Select An Option',
      value: null,
    });
  }

  return selectStoryOption;
};
