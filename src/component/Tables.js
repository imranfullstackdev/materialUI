import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Tables = () => {
  const alldata = [
    {
      id: 1,
      first_name: "Minni",
      last_name: "Vivyan",
      email: "mvivyan0@wordpress.org",
      gender: "Female",
      ip_address: "77.193.20.145",
    },
    {
      id: 2,
      first_name: "Tadd",
      last_name: "Hainey",
      email: "thainey1@loc.gov",
      gender: "Male",
      ip_address: "161.162.247.151",
    },
    {
      id: 3,
      first_name: "Constancia",
      last_name: "Jaffray",
      email: "cjaffray2@oaic.gov.au",
      gender: "Female",
      ip_address: "206.33.19.68",
    },
    {
      id: 4,
      first_name: "Leola",
      last_name: "Ricart",
      email: "lricart3@howstuffworks.com",
      gender: "Female",
      ip_address: "67.100.145.152",
    },
    {
      id: 5,
      first_name: "Cheri",
      last_name: "Posselow",
      email: "cposselow4@i2i.jp",
      gender: "male",
      ip_address: "37.25.39.47",
    },
    {
      id: 6,
      first_name: "Quincey",
      last_name: "Cordie",
      email: "qcordie5@state.tx.us",
      gender: "Male",
      ip_address: "126.239.88.149",
    },
    {
      id: 7,
      first_name: "Karina",
      last_name: "Gannon",
      email: "kgannon6@nasa.gov",
      gender: "Female",
      ip_address: "157.107.250.165",
    },
    {
      id: 8,
      first_name: "Marin",
      last_name: "Wharlton",
      email: "mwharlton7@cbc.ca",
      gender: "Female",
      ip_address: "108.228.251.247",
    },
    {
      id: 9,
      first_name: "Theodor",
      last_name: "Gantlett",
      email: "tgantlett8@yandex.ru",
      gender: "Male",
      ip_address: "136.137.124.225",
    },
    {
      id: 10,
      first_name: "Gennifer",
      last_name: "Taffrey",
      email: "gtaffrey9@phoca.cz",
      gender: "Female",
      ip_address: "181.241.114.79",
    },
  ];
  const deleteHandler = (id) => {
    console.log(alldata.includes(id), "id`");
    delete alldata[id];
    console.log(alldata);
    alert(alldata.id);
    alert("deleted Sucessfully");
  };

  return (
    <TableContainer>
      <center>
        <Typography variant="h3" mt-5>Table</Typography>
      </center>{" "}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Ip-Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alldata.map((item) => {
            return (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{item.first_name}</TableCell>
                <TableCell>{item.last_name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.gender}</TableCell>
                <TableCell>{item.ip_address}</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell onClick={() => deleteHandler(item.id)}>
                  delete
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
