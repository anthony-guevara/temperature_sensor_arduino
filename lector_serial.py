import serial
import time
import csv
import os


try:
    # Puerto COM4 es el utilizado por arduino UNO
    ser = serial.Serial('COM4', timeout=250)
    # Limpiar el puerto
    ser.flushInput()

except serial.SerialException:
    print("Porfavor, conecte la placa arduino.")


# eliminar el archivo viejo
nombre_archivo = "test_data.csv"
# try:
#    os.remove(nombre_archivo)
# except:
#    print("No existe el archivo, se creará uno nuevo.", nombre_archivo)

while True:
    try:
        ser_bytes = ser.readline()

        temperaruta_byte = ser_bytes[0:5]

        decoded_temperature = temperaruta_byte.decode("utf-8")
        
        print(decoded_temperature)

        humedad_byte = ser_bytes[11:16]

        decoded_humidity = humedad_byte.decode("utf-8")
        print(decoded_humidity)

        with open(nombre_archivo, "a") as f:
            writer = csv.writer(f, delimiter=",")
            writer.writerow([decoded_temperature, decoded_humidity])
    except:
        print("Hubo un error al leer el puerto serial.")
        break
