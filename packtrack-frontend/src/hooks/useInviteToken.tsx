import axiosApiInstance from "../utils/axios";

const useInviteToken = () => {
  const genToken = async (): Promise<string | null> => {
    try {
      let res = await axiosApiInstance.post("/api/auth/invite-token");
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
      if (res.status === 200) {
        return true;
      }
    } catch (err) {
      console.log(err);
    }

    return false;
  };

  return { genToken, validateToken };
};

export default useInviteToken;
