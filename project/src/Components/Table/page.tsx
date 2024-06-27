"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/Redux/store";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DynamicForm from "../Form/form";
import {
  Box,
  Paper,
  Toolbar,
  Typography,
  IconButton,
  Button,
  CircularProgress,
  TextField,
  Grid,
  Drawer,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { fetchStates } from "@/Redux/StateSlice";
import { fetchCountry } from "@/Redux/CountrySlice";
import { fetchBrands } from "@/Redux/BrandSlice";
import { fetchLeadStatus } from "@/Redux/LeadStatusSlice";
import { fetchLeadType } from "@/Redux/LeadTypeSlice";
import { fetchRoles } from "@/Redux/RoleSlice";
import { fetchGender } from "@/Redux/GenderSlice";
import { fetchStores } from "@/Redux/StoreSlice";
import { fetchLayout } from "@/Redux/LayoutSlice";
import { fetchSettings } from "@/Redux/SettingsSlice";

interface ButtonConfig {
  label: string;
  action: () => void;
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "Name", headerName: "Name", width: 200 },
  { field: "Description", headerName: "Description", width: 200 },
  { field: "Country", headerName: "Country", width: 150 },
  { field: "Status", headerName: "Status", width: 150 },
  {
    field: "Action",
    headerName: "Action",
    width: 100,
    renderCell: (params) => params.value,
  },
];

const Table: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.state);

  const [selectedSlice, setSelectedSlice] = useState<string | null>(null);
  const [utilitySearchText, setUtilitySearchText] = useState<string>("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Fetch initial data if no button has been clicked yet
    if (!selectedSlice) {
      fetchInitialState();
    }
  }, [selectedSlice]);

  const fetchInitialState = () => {
    // Perform initial data fetching here
    dispatch(fetchStates()); // Example: Fetch states as initial data
  };

  const selectState = useSelector((state: RootState) => state.state.data.data);
  const selectCountry = useSelector(
    (state: RootState) => state.country.data.data
  );
  const selectBrand = useSelector((state: RootState) => state.brand.data.data);
  const selectLeadStatus = useSelector(
    (state: RootState) => state.leadStatus.data.data
  );
  const selectRole = useSelector((state: RootState) => state.role.data.data);
  const selectGender = useSelector(
    (state: RootState) => state.gender.data.data
  );
  const selectStore = useSelector((state: RootState) => state.store.data.data);
  const selectLayout = useSelector(
    (state: RootState) => state.layout.data.data
  );
  const selectSettings = useSelector(
    (state: RootState) => state.settings.data.data
  );
  const selectLeadType = useSelector(
    (state: RootState) => state.leadType.data.data
  );

  const selectData = (sliceName: string): any[] => {
    switch (sliceName) {
      case "stateSlice":
        return selectState;
      case "countrySlice":
        return selectCountry;
      case "brandSlice":
        return selectBrand;
      case "leadStatusSlice":
        return selectLeadStatus;
      case "roleSlice":
        return selectRole;
      case "genderSlice":
        return selectGender;
      case "storeSlice":
        return selectStore;
      case "layoutSlice":
        return selectLayout;
      case "settingsSlice":
        return selectSettings;
      case "leadTypeSlice":
        return selectLeadType;
      default:
        return [];
    }
  };

  const rows = Array.isArray(selectData(selectedSlice || ""))
    ? selectData(selectedSlice || "").map((item: any) => ({
        id: item.id,
        Name: item.name,
        Description: item.description,
        Country: item.country,
        Status: item.status,
        Action: (
          <div>
            <IconButton>
              <ModeEditIcon />
            </IconButton>
          </div>
        ),
      }))
    : [];

  const handleFetchData = (
    fetchAction: () => void,
    sliceName: string
  ): void => {
    setSelectedSlice(sliceName);
    dispatch(fetchAction());
    setUtilitySearchText("");
  };

  const buttons: ButtonConfig[] = [
    {
      label: "State",
      action: () => handleFetchData(fetchStates, "stateSlice"),
    },
    {
      label: "Country",
      action: () => handleFetchData(fetchCountry, "countrySlice"),
    },
    {
      label: "Brand",
      action: () => handleFetchData(fetchBrands, "brandSlice"),
    },
    {
      label: "Lead Status",
      action: () => handleFetchData(fetchLeadStatus, "leadStatusSlice"),
    },
    {
      label: "Lead Type",
      action: () => handleFetchData(fetchLeadType, "leadTypeSlice"),
    },
    { label: "Role", action: () => handleFetchData(fetchRoles, "roleSlice") },
    {
      label: "Gender",
      action: () => handleFetchData(fetchGender, "genderSlice"),
    },
    {
      label: "Store Service",
      action: () => handleFetchData(fetchStores, "storeSlice"),
    },
    {
      label: "Layout",
      action: () => handleFetchData(fetchLayout, "layoutSlice"),
    },
    {
      label: "Settings",
      action: () => handleFetchData(fetchSettings, "settingsSlice"),
    },
  ];

  const filteredButtons = buttons.filter((button) =>
    button.label.toLowerCase().includes(utilitySearchText.toLowerCase())
  );

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setUtilitySearchText(event.target.value);
  };

  const handleOpenForm = () => {
    setIsSidebarOpen(true);
  };

  const handleCloseForm = () => {
    setIsSidebarOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
      }}
    >
      <Paper sx={{ flex: 1, backgroundColor: "whitesmoke" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {selectedSlice
              ? selectedSlice.replace("Slice", "")
              : "Select a utility"}
          </Typography>
          <SearchIcon sx={{ marginRight: 1 }} />
          <TextField
            id="search-input"
            type="text"
            placeholder="Search by name or description"
            variant="standard"
            sx={{ marginLeft: 1, width: "150px" }}
            value={utilitySearchText}
            onChange={handleSearchChange}
          />
          <IconButton sx={{ marginLeft: 1, color: "orange" }}>
            <Typography variant="button">US</Typography>
          </IconButton>
          <Button
            variant="contained"
            startIcon={<AddCircleIcon />}
            sx={{ marginLeft: 1, backgroundColor: "orange", color: "white" }}
            onClick={handleOpenForm}
          >
            Add New
          </Button>
        </Toolbar>
        <Box sx={{ height: 400, width: "100%" }}>
          {loading ? (
            <Box
              sx={{ display: "flex", justifyContent: "center", marginTop: 50 }}
            >
              <CircularProgress />
            </Box>
          ) : error ? (
            <Typography color="error">Failed to load data.</Typography>
          ) : selectedSlice ? (
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
            />
          ) : (
            <Typography variant="body1" sx={{ p: 2 }}>
              Please select a utility to load data.
            </Typography>
          )}
        </Box>
      </Paper>

      <Drawer anchor="right" open={isSidebarOpen} onClose={handleCloseForm}>
        <Box sx={{ width: "300px", padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Add New Entry
          </Typography>
          <DynamicForm />
        </Box>
      </Drawer>

      <Paper sx={{ flex: 1, padding: 2 }}>
        <Typography variant="h6" gutterBottom>
          Utility Search
        </Typography>
        <TextField
          fullWidth
          label="Search Utility Buttons"
          variant="outlined"
          value={utilitySearchText}
          onChange={handleSearchChange}
        />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {filteredButtons.map((button, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Button
                fullWidth
                variant="outlined"
                style={{
                  borderRadius: 8,
                  borderColor: "#FF9800",
                  marginBottom: 8,
                  color: "#FF9800",
                }}
                onClick={button.action}
              >
                {button.label}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default Table;
