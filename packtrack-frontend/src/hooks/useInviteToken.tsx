import axiosApiInstance from "../utils/axios";

const useInviteToken = () => {
  const genToken = async (): Promise<string | null> => {
    try {
      let res = await axiosApiInstance.get("/api/user/invite");
      console.log(res.data);

      return res.data.inviteToken;
    } catch (err) {
      alert(JSON.stringify(err));
    }

    return null;
  };

  const validateToken = async () => {
    try {
      let res = await axiosApiInstance.get("/api/user/invite");
      if (res.status === 200 && res.data) {
        console.log(res.data);
      }
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  return { genToken, validateToken };
};

export default useInviteToken;
