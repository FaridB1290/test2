import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AnalyticsList } from "./analytics/AnalyticsList";
import { AnalyticsCreate } from "./analytics/AnalyticsCreate";
import { AnalyticsEdit } from "./analytics/AnalyticsEdit";
import { AnalyticsShow } from "./analytics/AnalyticsShow";
import { CustomerFeedbackList } from "./customerFeedback/CustomerFeedbackList";
import { CustomerFeedbackCreate } from "./customerFeedback/CustomerFeedbackCreate";
import { CustomerFeedbackEdit } from "./customerFeedback/CustomerFeedbackEdit";
import { CustomerFeedbackShow } from "./customerFeedback/CustomerFeedbackShow";
import { DeliveryIntegrationList } from "./deliveryIntegration/DeliveryIntegrationList";
import { DeliveryIntegrationCreate } from "./deliveryIntegration/DeliveryIntegrationCreate";
import { DeliveryIntegrationEdit } from "./deliveryIntegration/DeliveryIntegrationEdit";
import { DeliveryIntegrationShow } from "./deliveryIntegration/DeliveryIntegrationShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { RestaurantManagementList } from "./restaurantManagement/RestaurantManagementList";
import { RestaurantManagementCreate } from "./restaurantManagement/RestaurantManagementCreate";
import { RestaurantManagementEdit } from "./restaurantManagement/RestaurantManagementEdit";
import { RestaurantManagementShow } from "./restaurantManagement/RestaurantManagementShow";
import { LoyaltyProgramList } from "./loyaltyProgram/LoyaltyProgramList";
import { LoyaltyProgramCreate } from "./loyaltyProgram/LoyaltyProgramCreate";
import { LoyaltyProgramEdit } from "./loyaltyProgram/LoyaltyProgramEdit";
import { LoyaltyProgramShow } from "./loyaltyProgram/LoyaltyProgramShow";
import { InventoryList } from "./inventory/InventoryList";
import { InventoryCreate } from "./inventory/InventoryCreate";
import { InventoryEdit } from "./inventory/InventoryEdit";
import { InventoryShow } from "./inventory/InventoryShow";
import { ReservationList } from "./reservation/ReservationList";
import { ReservationCreate } from "./reservation/ReservationCreate";
import { ReservationEdit } from "./reservation/ReservationEdit";
import { ReservationShow } from "./reservation/ReservationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Consolidated Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Analytics"
          list={AnalyticsList}
          edit={AnalyticsEdit}
          create={AnalyticsCreate}
          show={AnalyticsShow}
        />
        <Resource
          name="CustomerFeedback"
          list={CustomerFeedbackList}
          edit={CustomerFeedbackEdit}
          create={CustomerFeedbackCreate}
          show={CustomerFeedbackShow}
        />
        <Resource
          name="DeliveryIntegration"
          list={DeliveryIntegrationList}
          edit={DeliveryIntegrationEdit}
          create={DeliveryIntegrationCreate}
          show={DeliveryIntegrationShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="RestaurantManagement"
          list={RestaurantManagementList}
          edit={RestaurantManagementEdit}
          create={RestaurantManagementCreate}
          show={RestaurantManagementShow}
        />
        <Resource
          name="LoyaltyProgram"
          list={LoyaltyProgramList}
          edit={LoyaltyProgramEdit}
          create={LoyaltyProgramCreate}
          show={LoyaltyProgramShow}
        />
        <Resource
          name="Inventory"
          list={InventoryList}
          edit={InventoryEdit}
          create={InventoryCreate}
          show={InventoryShow}
        />
        <Resource
          name="Reservation"
          list={ReservationList}
          edit={ReservationEdit}
          create={ReservationCreate}
          show={ReservationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
