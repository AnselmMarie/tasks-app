interface CreateSelectOptionUtilProps {
  label: string;
  value: string | null;
}

export const createSelectOptionUtil = (
  data = [],
  label = '',
  value = '',
  addEmpty = true
): CreateSelectOptionUtilProps[] => {
  const selectStoryOption = data.map((el: any): CreateSelectOptionUtilProps => {
    return { label: el?.[label], value: el?.[value] };
  });

  if (addEmpty) {
    selectStoryOption.unshift({
      label: 'Select An Option',
      value: null,
    });
  }

  return selectStoryOption;
};
