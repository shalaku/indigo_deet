self.addEventListener('push', (event) => {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }
  let data;
  try {
    data = event.data ? event.data.json() : { title: 'Default', body: 'No data' };
  } catch (e) {
    console.error('JSON parsing error:', e);
    data = { title: 'Default', body: 'No data' };
  }
  const options = {
    body: data.body,
    icon: data.icon || '/cast-default-icon.png',
    badge: data.badge || '/cast-default-badge.png',
    data: { url: data.url || '/cast' },
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});