import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

export function ClearAllLocalNotifications() {
    Notifications.cancelAllScheduledNotificationsAsync();
}

export function AddNotificationListener(onNotifyCallback) {
    return Notifications.addNotificationReceivedListener((notification) => onNotifyCallback(notification));
}

export function SetLocalNotification() {
    Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
            if (status === 'granted') {
                console.log('Notification permissions granted.');
                Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                    console.log("All notifications cleared.")

                    Notifications.scheduleNotificationAsync({
                        content: {
                            title: 'Udaci Mobile Flashcards App',
                            body: '👋 don\'t forget to learn something for today!'
                        },
                        trigger: {
                            hour : 9,
                            minute: 0,
                            repeats: true
                        },
                    }).then(() => console.log("Notification succesfully scheduled."))
                });
            }
        })
}
