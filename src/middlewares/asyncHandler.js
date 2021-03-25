export default (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
