module.exports.setRefreshToken = (res, token) => {
    res.cookie('refreshToken', token, { httpOnly: true });
};