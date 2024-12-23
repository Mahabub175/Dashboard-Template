import { Progress } from "antd";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";

export const dataSource = [
  {
    key: "1",
    name: "Luhutan Imin",
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    employmentId: "L8RQSC",
    typeOfHire: "Employee",
    country: "Australia",
    flag: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
    licenseUse: 1,
    status: "Draft",
  },
  {
    key: "2",
    name: "Robert Fox",
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    employmentId: "L8RQSC",
    typeOfHire: "Employee",
    country: "Australia",
    flag: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
    licenseUse: 1,
    status: "Draft",
  },
  {
    key: "3",
    name: "Eleanor Pena",
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    employmentId: "L8RQSC",
    typeOfHire: "Employee",
    country: "Australia",
    flag: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
    licenseUse: 1,
    status: "Draft",
  },
  {
    key: "4",
    name: "Leslie Alexander",
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    employmentId: "L8RQSC",
    typeOfHire: "Employee",
    country: "Australia",
    flag: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
    licenseUse: 1,
    status: "Draft",
  },
  {
    key: "5",
    name: "Devon Lane",
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    employmentId: "L8RQSC",
    typeOfHire: "Employee",
    country: "Australia",
    flag: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
    licenseUse: 1,
    status: "Draft",
  },
  {
    key: "6",
    name: "Jenny Wilson",
    image:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    employmentId: "L8RQSC",
    typeOfHire: "Employee",
    country: "Australia",
    flag: "https://cdn.britannica.com/82/2982-050-4A783E03/flag-prototype-Netherlands-countries-European-flags.jpg",
    licenseUse: 1,
    status: "Draft",
  },
];

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-2">
        <Image
          src={record.image}
          alt={record.name}
          width={40}
          height={40}
          className="rounded-xl"
        />
        <span className="font-semibold">{text}</span>
      </div>
    ),
  },
  {
    title: "Employment ID",
    dataIndex: "employmentId",
    key: "employmentId",
    render: (text) => (
      <div className="flex items-center gap-2">
        <span className="font-semibold">{text}</span>
        <MdOutlineContentCopy />
      </div>
    ),
  },
  {
    title: "Type Of Hire",
    dataIndex: "typeOfHire",
    key: "typeOfHire",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
    render: (text, record) => (
      <div className="flex items-center gap-2">
        <Image
          src={record.flag}
          alt={record.country}
          width={40}
          height={40}
          className="rounded-xl"
        />
        <span className="font-semibold">{text}</span>
      </div>
    ),
  },
  {
    title: "License Use",
    dataIndex: "licenseUse",
    key: "licenseUse",
    render: (text) => (
      <div className="flex items-center gap-2">
        <Progress
          percent={Math.min((text / 5) * 100, 100)}
          status="active"
          showInfo={false}
        />
        <span className="font-semibold">{text}/5</span>
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "right",
    render: (text) => (
      <button className="bg-primary rounded-lg text-lg font-bold px-4">
        {text}
      </button>
    ),
  },
];

export const tableData = dataSource?.map((item) => ({
  ...item,
  key: item.key,
}));
