export const skeletonLoadDataUtil = (data: any, isLoading = false, arrCount = 4) => {
  const finalData = !isLoading ? data : [];

  if (isLoading) {
    for (let i = 0; i < arrCount; i++) {
      finalData.push({});
    }
  }

  return finalData;
};
