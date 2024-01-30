from time import sleep
from fastapi import FastAPI,HTTPException
import uvicorn
app = FastAPI()
import fastapi
print(fastapi.__version__)
print(uvicorn.__version__)

@app.get("/")
async def root():
    return {'Response':"Home"}

@app.get("/Read")
async def read_principal(user:str,password:str):
    if user == 'admin' and password == 'password':
        return {"Models":["Modelo1,Modelo2,Modelo3"]}
    else:
        raise HTTPException(status_code=404, detail="User or password incorrect")
    
@app.get("/Second_read")
async def read_segundacasilla(user:str,password:str,Model_selected:str):
    """Primera casilla. Tarda en desplegar

    Args:
        user (str): admin
        password (str): password
        Loca_Model_selected (str): Optain in Read

    Raises:
        HTTPException: No correct Local Model
        HTTPException: Incorrect user/password

    Returns:
        _type_: {local models: AQUI LOS MODELOS}
    """
    sleep(5)
    if Model_selected not in ["Modelo1,Modelo2,Modelo3"]:
        raise HTTPException(status_code=404, detail="Model not found")
    if user == 'admin' and password == 'password':
        return {'Local_models':["LocalModelo1,LocalModelo2,LocalModelo3"]}
    else:
        raise HTTPException(status_code=404, detail="User or password incorrect")
@app.get("/Last_boton")
async def Button_START(user:str,password:str,Loca_Model_selected:str):
    """Debe existir un boton que mande toda la información
    
    Tarda en desplegar

    Args:
        user (str): admin
        password (str): password
        Loca_Model_selected (str): Optain in Second_read

    Raises:
        HTTPException: No correct Local Model
        HTTPException: Incorrect user/password

    Returns:
        _type_: STR
    """
    sleep(5)
    if Loca_Model_selected not in ["LocalModelo1,LocalModelo2,LocalModelo3"]:
        raise HTTPException(status_code=400, detail="Model not found")
    if user == 'admin' and password == 'password':
        return {'RESPONSE':"TAREA AÑADIDA Y EN EJECUCION, ESTARA DISPONIBLE EN HISTORICO"}
    else:
        raise HTTPException(status_code=400, detail="User or password incorrect")

if __name__ == '__main__':
    print('La API CORRERA EN http://0.0.0.0:8080 ')
    uvicorn.run(app, host= "0.0.0.0", port=8080)
    