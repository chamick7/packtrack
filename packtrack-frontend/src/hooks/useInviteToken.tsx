import axiosApiInstance from "../utils/axios";

const useInviteToken = () => {
  const genToken = async (): Promise<string | null> => {
    try {
      let res = await axiosApiInstance.get("/api/user/invite");
      return res.data.inviteToken;
    } catch (err) {
      console.log(err);
    }

    return null;
  };

  const validateToken = async (
    inviteToken: string
  ): Promise<boolean | null> => {
    try {
      let res = await axiosApiInstance.post("/api/auth/invite-token/validate", {
        inviteToken,
      });
      if (res.status === 200 && res.data) {
        if (res.data.valid) return true;
        else return false;
      }
    } catch (err) {
      console.log(err);
    }

    return null;
  };

  return { genToken, validateToken };
};

export default useInviteToken;
