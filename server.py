import serial
import time
import csv


try:
    ser = serial.Serial('COM4', timeout=3000)
#print(ser)
    ser.flushInput()
except serial.SerialException:
    print("Porfavor conecte la placa arduino")

while True:
    try:
        ser_bytes = ser.readline()
        #print(ser_bytes)
        temperaruta_byte = ser_bytes[0:5]
        #print(temperaruta_byte)
        decoded_temperature = temperaruta_byte.decode("utf-8") 
        print(decoded_temperature)
    
        humedad_byte = ser_bytes[11:16]
        #print(humedad_byte)
        decoded_humidity = humedad_byte.decode("utf-8")
        print(decoded_humidity)
        with open("test_data.csv","a") as f:
            writer = csv.writer(f,delimiter=",")
            writer.writerow([decoded_temperature, decoded_humidity])
    except:
        print("Keyboard Interrupt")
        break
    