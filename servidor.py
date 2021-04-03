from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import csv

#from lector_serial import filePath
origins = [
    "http://localhost",
    "http://localhost:80",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def index():

    # Arreglo donde se guardarán los valores del archivo
    valores = []
    filePath = "test_data.csv"
    with open(filePath) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            # print(row)
            if not row:
                pass
            else:
                line_count += 1
                #print(f'\t{row[0]},  {row[1]}')
                valor = {'temperatura': row[0], 'humedad': row[1]}
                valores.append(valor)

    print(valores)

    return valores
