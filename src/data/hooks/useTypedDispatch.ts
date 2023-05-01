import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../types/storeTypes";

const useTypedDispatch = () => useDispatch<AppThunkDispatch>();

export default useTypedDispatch;
