import { useDispatch } from "react-redux";
import { AppThunkDispatch } from "../../types/store";

export const useTypedDispatch = () => useDispatch<AppThunkDispatch>();