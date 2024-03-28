if (typeof(DeviceMotionEvent) !== 'undefined' && typeof(DeviceMotionEvent.requestPermission) === 'function') {
    DeviceMotionEvent.requestPermission()
    .then(permissionState => {
        if (permissionState === 'granted') {
        window.addEventListener('devicemotion', handleDeviceShake);
		}
    })
    .catch(console.error);
} else {
    window.addEventListener('devicemotion', handleDeviceShake);
}