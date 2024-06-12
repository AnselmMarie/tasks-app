import { cloneDeep } from 'lodash';

export const skeletonLoadDataUtil = (
  data: readonly unknown[],
  isLoading = false,
  arrCount = 4
): unknown[] => {
  const finalData = !isLoading ? (cloneDeep(data) as unknown[]) : [];

  if (isLoading) {
    for (let i = 0; i < arrCount; i++) {
      finalData.push({});
    }
  }

  return finalData;
};
