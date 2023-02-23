import { useSelector } from "react-redux";
import { RootState } from "../../../../core/store/store";

export function Display() {
  const phoneNumber = useSelector((state: RootState) => state);
  // const dispatch = useDispatch<AppDispatch>();
  console.log(phoneNumber);
  return (
    <span role={"none"} className="number">
      {phoneNumber.phone}
    </span>
  );
}
