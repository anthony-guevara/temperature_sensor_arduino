/* 
 SI7021 to serial port
 By: Enrique
 RincónIngenieril
 Date: June 29th, 2016
 License: This code is public domain.
*/

#include <Wire.h>

//General variables
int temp[2], hum[5];
double temp_code, rh_code;
float temperature, RH;
//Direccin del sensor
byte direccion = 0x40;


void setup()
{
  Wire.begin();        //Initialize I2C
  Serial.begin(9600);  //Initialize Serial Port
}

void loop()
{
  Wire.beginTransmission(direccion);   //Begin comunication with the slave
  Wire.write(0xE3);                    //Send 0xE3 in order to read the temperature
  Wire.endTransmission();                
  Wire.requestFrom(direccion,2);       //Request 2 bytes
  
  if(Wire.available()<=2){             //If bytes are recieved
    temp[0] = Wire.read();             //Save it on temp
    temp[1] = Wire.read();
    
    //Calc the temperature
    temp_code = (temp[0]<<8) + temp[1];
    temperature = ((175.72 * temp_code)/65536)-46.85;
    
    Serial.print(temperature);
    Serial.print(" C    ");
  }
  
  Wire.beginTransmission(direccion);
  Wire.write(0xE5);                    //Ask for Relatative humidity
  Wire.endTransmission();
  
  Wire.requestFrom(direccion,2);
  
  if(Wire.available()<=2);
  {
    hum[0] = Wire.read();
    hum[1] = Wire.read();
   
    rh_code = (hum[0]<<8) + hum[1];
    RH = ((125*rh_code)/65536)-6;
  
    Serial.print(RH);
    Serial.println(" %");
  }
   
  delay(2000);
}
