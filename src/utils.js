function normalizeTranslatedKeys(obj, local) {
  let normalizedObj = obj;
  Object.keys(obj).forEach(key => {
    let identifier = "_" + local;
    if (key.includes(identifier)) {
      let normalizedKey = key.replace(identifier, "");
      normalizedObj = {
        ...normalizedObj,
        [normalizedKey]: obj[key]
      };
    }
  });
  return normalizedObj;
}

module.exports = {
  normalizeTranslatedKeys
};
