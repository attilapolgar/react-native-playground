const uniqueElements = arr => [...new Set(arr)]

export const createOptionGroups = (options, groupBy) =>
  groupBy
    ? uniqueElements(options.map(o => o[groupBy]).sort()).map(group => ({
        name: group,
        options: options.filter(o => o[groupBy] === group),
      }))
    : [{ name: null, options }]
