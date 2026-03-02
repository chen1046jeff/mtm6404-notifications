import { useState } from "react"
import notificationsData from "./notifications"
import "./App.css"

function Notification({ id, name, message, onClear, children }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{message}</p>
      {children}
      <br />
      <button onClick={() => onClear(id)}>Clear</button>
    </div>
  )
}

function App() {
  const [notifications, setNotifications] = useState(notificationsData)

  const clearNotification = (id) => {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    )
    setNotifications(updatedNotifications)
  }

  const clearAll = () => {
    setNotifications([])
  }

  return (
    <div>
      <h1>Notifications</h1>
      <h2>Total: {notifications.length}</h2>
      <button onClick={clearAll}>Clear All</button>

      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          id={notification.id}
          name={notification.name}
          message={notification.message}
          onClear={clearNotification}
        >
          <small>ID: {notification.id}</small>
        </Notification>
      ))}
    </div>
  )
}

export default App