import React from "react";
import { formateDate } from "../../utils/formatDate";

const Appointments = ({ appointments }) => {
  return (
    <table className="w-full text-left text-sm text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
        <tr>
          <th scope="col" className="px-6 py-6">
            Name
          </th>
          <th scope="col" className="px-6 py-6">
            Gender
          </th>
          <th scope="col" className="px-6 py-6">
            Payment
          </th>
          <th scope="col" className="px-6 py-6">
            Price
          </th>
          <th scope="col" className="px-6 py-6">
            Booked on
          </th>
          <th scope="col" className="px-6 py-6">
            Test name
          </th>
        </tr>
      </thead>

      <tbody>
        {appointments?.map((item) => (
          <tr key={item._id}>
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              <div className="pl-3">
                <div className="text-base font-semibold">
                  {item.patientName}
                </div>
              </div>
            </th>
            <td className="px-6 py-4">{item.patientGender}</td>{" "}
            <td className="px-6 py-4">{item.payment}</td>
            <td className="px-6 py-4">{item.price}</td>
            <td className="px-6 py-4">{formateDate(item.bookedOn)}</td>
            <td className="px-6 py-4">{item.testName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Appointments;
