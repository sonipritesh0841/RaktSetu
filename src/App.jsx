import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';

import { BloodStockLevels,
  AddNewStock,
  AlertSystem,
  BloodRequests,
  RequestFulfillment,
  RequestHistory,
  AppointmentCalendar,
  ManageAppointments,
  SystemAlerts,
  CommunicationHub,
  UserRoles,
  UserProfile,
  DonationReports,
  InventoryReports,
  RequestReports,
  SystemConfiguration,
  Customization,
  FAQ,
  ContactSupport } from "./Components/index";

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Blood Donation Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <List>
            <ListItem button component={Link} to="/inventory/stock">
              <ListItemText primary="Blood Inventory" />
            </ListItem>
            <ListItem button component={Link} to="/inventory/add">
              <ListItemText primary="Add New Stock" />
            </ListItem>
            <ListItem button component={Link} to="/inventory/alerts">
              <ListItemText primary="Alert System" />
            </ListItem>
            <ListItem button component={Link} to="/requests">
              <ListItemText primary="Blood Requests" />
            </ListItem>
            <ListItem button component={Link} to="/requests/fulfill">
              <ListItemText primary="Request Fulfillment" />
            </ListItem>
            <ListItem button component={Link} to="/requests/history">
              <ListItemText primary="Request History" />
            </ListItem>
            <ListItem button component={Link} to="/appointments/calendar">
              <ListItemText primary="Appointment Calendar" />
            </ListItem>
            <ListItem button component={Link} to="/appointments/manage">
              <ListItemText primary="Manage Appointments" />
            </ListItem>
            <ListItem button component={Link} to="/alerts/system">
              <ListItemText primary="System Alerts" />
            </ListItem>
            <ListItem button component={Link} to="/alerts/communication">
              <ListItemText primary="Communication Hub" />
            </ListItem>
            <ListItem button component={Link} to="/users/roles">
              <ListItemText primary="User Roles" />
            </ListItem>
            <ListItem button component={Link} to="/users/profile">
              <ListItemText primary="User Profile" />
            </ListItem>
            <ListItem button component={Link} to="/reports/donations">
              <ListItemText primary="Donation Reports" />
            </ListItem>
            <ListItem button component={Link} to="/reports/inventory">
              <ListItemText primary="Inventory Reports" />
            </ListItem>
            <ListItem button component={Link} to="/reports/requests">
              <ListItemText primary="Request Reports" />
            </ListItem>
            <ListItem button component={Link} to="/settings/configuration">
              <ListItemText primary="System Configuration" />
            </ListItem>
            <ListItem button component={Link} to="/settings/customization">
              <ListItemText primary="Customization" />
            </ListItem>
            <ListItem button component={Link} to="/support/faq">
              <ListItemText primary="FAQ" />
            </ListItem>
            <ListItem button component={Link} to="/support/contact">
              <ListItemText primary="Contact Support" />
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Routes>
            {/* Blood Inventory Management */}
            <Route path="/inventory/stock" element={<BloodStockLevels />} />
            <Route path="/inventory/add" element={<AddNewStock />} />
            <Route path="/inventory/alerts" element={<AlertSystem />} />

            {/* Request Management */}
            <Route path="/requests" element={<BloodRequests />} />
            <Route path="/requests/fulfill" element={<RequestFulfillment />} />
            <Route path="/requests/history" element={<RequestHistory />} />

            {/* Donor Appointment Scheduling */}
            <Route path="/appointments/calendar" element={<AppointmentCalendar />} />
            <Route path="/appointments/manage" element={<ManageAppointments />} />

            {/* Notifications and Alerts */}
            <Route path="/alerts/system" element={<SystemAlerts />} />
            <Route path="/alerts/communication" element={<CommunicationHub />} />

            {/* User Management */}
            <Route path="/users/roles" element={<UserRoles />} />
            <Route path="/users/profile" element={<UserProfile />} />

            {/* Reporting and Analytics */}
            <Route path="/reports/donations" element={<DonationReports />} />
            <Route path="/reports/inventory" element={<InventoryReports />} />
            <Route path="/reports/requests" element={<RequestReports />} />

            {/* Settings */}
            <Route path="/settings/configuration" element={<SystemConfiguration />} />
            <Route path="/settings/customization" element={<Customization />} />

            {/* Support and Help */}
            <Route path="/support/faq" element={<FAQ />} />
            <Route path="/support/contact" element={<ContactSupport />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
