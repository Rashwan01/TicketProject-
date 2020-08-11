class Token {
    isValid(token) {
        const payload = this.payload(token);
        if (payload) {
            return payload.iss == "http://127.0.0.1:8000/api/auth/login" ||
                "http://127.0.0.1:8000/api/auth/signup"
                ? true
                : false;
        }
        return false;
    }
    payload(token) {
        const payload = token.split(".")[1];

        return this.decode(payload);
    }
    decode(payload) {
        return this.isBased64(payload) ? JSON.parse(atob(payload)) : false;
    }
    isBased64(Str) {
        try {
            return btoa(atob(Str)).replace(/=/g, "") == Str;
        } catch (error) {
            return false;
        }
    }
}
export default Token = new Token();
