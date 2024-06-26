"use client";

// import React, { useState } from "react";
// import { TextField, Grid, Button, Paper, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { fetchStates } from "@/Redux/StateSlice";

// const Table2: React.FC = () => {
//   const [searchText, setSearchText] = useState("");
//   const dispatch = useDispatch();
//   const buttons = [
//     "State",
//     "Country",
//     "Brand",
//     "Lead Status",
//     "Lead Type",
//     "Role",
//     "Gender",
//     "Store Service",
//     "Layout",
//     "Settings",
//   ];

//   const filteredButtons = searchText
//     ? buttons.filter((label) =>
//         label.toLowerCase().includes(searchText.toLowerCase())
//       )
//     : buttons;

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(event.target.value);
//   };

//   const handleButtonClick = (label: string) => {
//     if (label === "State") {
//       dispatch(fetchStates());
//     } else {
//       // Handle other button clicks if needed
//       console.log(`Clicked on ${label}`);
//     }
//   };

//   return (
//     <Paper style={{ padding: 16, marginTop: 70 }}>
//       <Typography variant="h6" gutterBottom>
//         Utility Search
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Search Utility"
//             variant="outlined"
//             value={searchText}
//             onChange={handleSearchChange}
//           />
//         </Grid>
//         {filteredButtons.length === 0 && searchText.length > 0 && (
//           <Typography variant="body2" color="error" style={{ marginTop: 8 }}>
//             No matches found.
//           </Typography>
//         )}
//         {filteredButtons.map((label, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Button
//               fullWidth
//               variant="outlined"
//               style={{
//                 borderRadius: 8,
//                 borderColor: "#FF9800", // Orange color
//                 marginBottom: 8,
//                 color: "#FF9800", // Orange color
//               }}
//               onClick={() => handleButtonClick(label)}
//             >
//               {label}
//             </Button>
//           </Grid>
//         ))}
//       </Grid>
//       {filteredButtons.length === 0 && searchText.length === 0 && (
//         <Grid container spacing={2}>
//           {buttons.map((label, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <Button
//                 fullWidth
//                 variant="outlined"
//                 style={{
//                   borderRadius: 8,
//                   borderColor: "#FF9800", // Orange color
//                   marginBottom: 8,
//                   color: "#FF9800", // Orange color
//                 }}
//                 onClick={() => handleButtonClick(label)}
//               >
//                 {label}
//               </Button>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Paper>
//   );
// };

// export default Table2;

// Table2.tsx

// import React, { useState } from "react";
// import { TextField, Grid, Button, Paper, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { fetchStates } from "@/Redux/StateSlice"; // Example import for StateSlice
// import { fetchCountry } from "@/Redux/CountrySlice"; // Import other slices as needed
// import { fetchBrands } from "@/Redux/BrandSlice";
// import { fetchLeadStatus } from "@/Redux/LeadStatusSlice";
// import { fetchLeadType } from "@/Redux/LeadTypeSlice";
// import { fetchRoles } from "@/Redux/RoleSlice";
// import { fetchGender } from "@/Redux/GenderSlice";
// import { fetchStores } from "@/Redux/StoreSlice";
// import { fetchLayout } from "@/Redux/LayoutSlice";
// import { fetchSettings } from "@/Redux/SettingsSlice";

// const Table2: React.FC = () => {
//   const [searchText, setSearchText] = useState("");
//   const dispatch = useDispatch();
//   const buttons = [
//     "State",
//     "Country",
//     "Brand",
//     "Lead Status",
//     "Lead Type",
//     "Role",
//     "Gender",
//     "Store Service",
//     "Layout",
//     "Settings",
//   ];

//   const filteredButtons = searchText
//     ? buttons.filter((label) =>
//         label.toLowerCase().includes(searchText.toLowerCase())
//       )
//     : buttons;

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchText(event.target.value);
//   };

//   const handleButtonClick = (label: string) => {
//     switch (label) {
//       case "State":
//         dispatch(fetchStates());
//         break;
//       case "Country":
//         dispatch(fetchCountry());
//         break;
//       case "Brand":
//         dispatch(fetchBrands());
//         break;
//       case "Lead Status":
//         dispatch(fetchLeadStatus());
//         break;
//       case "Lead Type":
//         dispatch(fetchLeadType());
//         break;
//       case "Role":
//         dispatch(fetchRoles());
//         break;
//       case "Gender":
//         dispatch(fetchGender());
//         break;
//       case "Store Service":
//         dispatch(fetchStores());
//         break;
//       case "Layout":
//         dispatch(fetchLayout());
//         break;
//       case "Settings":
//         dispatch(fetchSettings());
//         break;
//       default:
//         console.log(`Clicked on ${label}`);
//         break;
//     }
//   };

//   return (
//     <Paper style={{ padding: 16, marginTop: 70 }}>
//       <Typography variant="h6" gutterBottom>
//         Utility Search
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <TextField
//             fullWidth
//             label="Search Utility"
//             variant="outlined"
//             value={searchText}
//             onChange={handleSearchChange}
//           />
//         </Grid>
//         {filteredButtons.length === 0 && searchText.length > 0 && (
//           <Typography variant="body2" color="error" style={{ marginTop: 8 }}>
//             No matches found.
//           </Typography>
//         )}
//         {filteredButtons.map((label, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <Button
//               fullWidth
//               variant="outlined"
//               style={{
//                 borderRadius: 8,
//                 borderColor: "#FF9800", // Orange color
//                 marginBottom: 8,
//                 color: "#FF9800", // Orange color
//               }}
//               onClick={() => handleButtonClick(label)}
//             >
//               {label}
//             </Button>
//           </Grid>
//         ))}
//       </Grid>
//       {filteredButtons.length === 0 && searchText.length === 0 && (
//         <Grid container spacing={2}>
//           {buttons.map((label, index) => (
//             <Grid item xs={12} sm={6} key={index}>
//               <Button
//                 fullWidth
//                 variant="outlined"
//                 style={{
//                   borderRadius: 8,
//                   borderColor: "#FF9800", // Orange color
//                   marginBottom: 8,
//                   color: "#FF9800", // Orange color
//                 }}
//                 onClick={() => handleButtonClick(label)}
//               >
//                 {label}
//               </Button>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Paper>
//   );
// };

// export default Table2;

////////////

// import * as React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/Redux/store";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import { useEffect } from "react";
// import {
//   Box,
//   Paper,
//   Toolbar,
//   Typography,
//   IconButton,
//   Button,
//   CircularProgress,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import { fetchStates } from "@/Redux/StateSlice"; // Example import for StateSlice
// import { fetchCountry } from "@/Redux/CountrySlice"; // Import other slices as needed
// import { fetchBrands } from "@/Redux/BrandSlice";
// import { fetchLeadStatus } from "@/Redux/LeadStatusSlice";
// import { fetchLeadType } from "@/Redux/LeadTypeSlice";
// import { fetchRoles } from "@/Redux/RoleSlice";
// import { fetchGender } from "@/Redux/GenderSlice";
// import { fetchStores } from "@/Redux/StoreSlice";
// import { fetchLayout } from "@/Redux/LayoutSlice";
// import { fetchSettings } from "@/Redux/SettingsSlice";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 90 },
//   { field: "Name", headerName: "Name", width: 200 },
//   { field: "Description", headerName: "Description", width: 200 },
//   { field: "Country", headerName: "Country", width: 150 },
//   { field: "Status", headerName: "Status", width: 150 },
// ];

// const Table: React.FC = () => {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector(
//     (state: RootState) => state.state // Update with appropriate slice based on Table2 button clicks
//   );

//   const handleButtonClick = (label: string) => {
//     switch (label) {
//       case "State":
//         dispatch(fetchStates());
//         break;
//       case "Country":
//         dispatch(fetchCountry());
//         break;
//       case "Brand":
//         dispatch(fetchBrands());
//         break;
//       case "Lead Status":
//         dispatch(fetchLeadStatus());
//         break;
//       case "Lead Type":
//         dispatch(fetchLeadType());
//         break;
//       case "Role":
//         dispatch(fetchRoles());
//         break;
//       case "Gender":
//         dispatch(fetchGender());
//         break;
//       case "Store Service":
//         dispatch(fetchStores());
//         break;
//       case "Layout":
//         dispatch(fetchLayout());
//         break;
//       case "Settings":
//         dispatch(fetchSettings());
//         break;
//       default:
//         console.log(`Clicked on ${label}`);
//         break;
//     }
//   };

//   useEffect(() => {
//     dispatch(fetchStates());
//   }, [dispatch]);

//   return (
//     <Box sx={{ marginTop: 2 }}>
//       <Paper style={{ backgroundColor: "whitesmoke" }}>
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             State {/* Update dynamically based on the button clicked */}
//           </Typography>
//           <SearchIcon sx={{ marginRight: 1 }} />
//           <input type="text" placeholder="Search..." />
//           <IconButton sx={{ marginLeft: 1, color: "orange" }}>
//             <Typography variant="button">Us</Typography>
//           </IconButton>
//           <Button
//             variant="contained"
//             startIcon={<AddCircleIcon />}
//             sx={{ marginLeft: 1, backgroundColor: "orange", color: "white" }}
//           >
//             Add
//           </Button>
//         </Toolbar>
//         <Box sx={{ height: 400, width: "100%" }}>
//           {loading ? (
//             <Box
//               sx={{ display: "flex", justifyContent: "center", marginTop: 50 }}
//             >
//               <CircularProgress />
//             </Box>
//           ) : error ? (
//             <Typography color="error">Failed to load data.</Typography>
//           ) : (
//             <DataGrid
//               rows={data}
//               columns={columns}
//               pageSize={5}
//               rowsPerPageOptions={[5]}
//               autoHeight
//               disableSelectionOnClick
//             />
//           )}
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default Table;

// Table2.tsx

import React, { useState } from "react";
import { TextField, Grid, Button, Paper, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchStates } from "@/Redux/StateSlice"; // Example import for StateSlice
import { fetchCountry } from "@/Redux/CountrySlice"; // Import other slices as needed
import { fetchBrands } from "@/Redux/BrandSlice";
import { fetchLeadStatus } from "@/Redux/LeadStatusSlice";
import { fetchLeadType } from "@/Redux/LeadTypeSlice";
import { fetchRoles } from "@/Redux/RoleSlice";
import { fetchGender } from "@/Redux/GenderSlice";
import { fetchStores } from "@/Redux/StoreSlice";
import { fetchLayout } from "@/Redux/LayoutSlice";
import { fetchSettings } from "@/Redux/SettingsSlice";

const Table2: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const buttons = [
    "State",
    "Country",
    "Brand",
    "Lead Status",
    "Lead Type",
    "Role",
    "Gender",
    "Store Service",
    "Layout",
    "Settings",
  ];

  const filteredButtons = searchText
    ? buttons.filter((label) =>
        label.toLowerCase().includes(searchText.toLowerCase())
      )
    : buttons;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleButtonClick = (label: string) => {
    switch (label) {
      case "State":
        dispatch(fetchStates());
        break;
      case "Country":
        dispatch(fetchCountry());
        break;
      case "Brand":
        dispatch(fetchBrands());
        break;
      case "Lead Status":
        dispatch(fetchLeadStatus());
        break;
      case "Lead Type":
        dispatch(fetchLeadType());
        break;
      case "Role":
        dispatch(fetchRoles());
        break;
      case "Gender":
        dispatch(fetchGender());
        break;
      case "Store Service":
        dispatch(fetchStores());
        break;
      case "Layout":
        dispatch(fetchLayout());
        break;
      case "Settings":
        dispatch(fetchSettings());
        break;
      default:
        console.log(`Clicked on ${label}`);
        break;
    }
  };

  return (
    <Paper style={{ padding: 16, marginTop: 2 }}>
      <Typography variant="h6" gutterBottom>
        Utility Search
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Search Utility"
            variant="outlined"
            value={searchText}
            onChange={handleSearchChange}
          />
        </Grid>
        {filteredButtons.length === 0 && searchText.length > 0 && (
          <Typography variant="body2" color="error" style={{ marginTop: 8 }}>
            No matches found.
          </Typography>
        )}
        {filteredButtons.map((label, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Button
              fullWidth
              variant="outlined"
              style={{
                borderRadius: 8,
                borderColor: "#FF9800", // Orange color
                marginBottom: 8,
                color: "#FF9800", // Orange color
              }}
              onClick={() => handleButtonClick(label)}
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>
      {filteredButtons.length === 0 && searchText.length === 0 && (
        <Grid container spacing={2}>
          {buttons.map((label, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Button
                fullWidth
                variant="outlined"
                style={{
                  borderRadius: 8,
                  borderColor: "#FF9800", // Orange color
                  marginBottom: 8,
                  color: "#FF9800", // Orange color
                }}
                onClick={() => handleButtonClick(label)}
              >
                {label}
              </Button>
            </Grid>
          ))}
        </Grid>
      )}
    </Paper>
  );
};

export default Table2;
