import { doctors } from "./../../assets/data/doctors";
import DoctorCard from "./DoctorCard";

import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../Error/Error";

const DoctorList = () => {
  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors`);
  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};

export default DoctorList;
