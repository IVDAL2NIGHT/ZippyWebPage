import React from "react";
import "./AppStationDetails.css";
import { MyButton } from "./MyButton";

function AppStationDetails() {
  return (
    <div class="app_station_details">
      <i class="bi bi-x-square-fill"></i>
      <br />
      <h1 class="station_title">Estación UIS</h1>
      <br />
      <div class="table-responsive">
        <table class="table table-hover">
          <thead>
            <tr>
              <th class="th_id">id</th>
              <th>Modelo</th>
              <th>Tipo</th>
              <th>Ultimo mantenimiento</th>
              <th>Precio viaje</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>411</td>
              <td class="td_model">
                <img src="https://images.versus.io/objects/turboant-x7-pro.front.master.1620657647279.jpg" />
              </td>
              <td>Patineta electrica</td>
              <td>1/6/2023</td>
              <td>$1.500</td>
              <td>
                <MyButton text="Alquilar" />
                <MyButton text="Reservar" />
                {/* <button type="button" class="btn btn-primary" id="fila_1">
                    Alquilar
                  </button>
                  <button type="button" class="btn btn-primary">
                    Reservar
                  </button> */}
              </td>
            </tr>
            <tr>
              <td>405</td>
              <td>
                <img src="https://images.versus.io/objects/turboant-x7-pro.front.master.1620657647279.jpg" />
              </td>
              <td>Patineta electrica</td>
              <td>1/6/2023</td>
              <td>$1.500</td>
              <td>
                <button type="button" class="btn btn-primary" id="fila_2">
                  Alquilar
                </button>
                <button type="button" class="btn btn-primary">
                  Reservar
                </button>
              </td>
            </tr>
            <tr>
              <td>415</td>
              <td>
                <img src="https://images.versus.io/objects/turboant-x7-pro.front.master.1620657647279.jpg" />
              </td>
              <td>Patineta electrica</td>
              <td>1/6/2023</td>
              <td>$1.500</td>
              <td>
                <button type="button" class="btn btn-primary" id="fila_3">
                  Alquilar
                </button>
                <button type="button" class="btn btn-primary">
                  Reservar
                </button>
              </td>
            </tr>
            <tr>
              <td>402</td>
              <td>
                <img src="https://images.versus.io/objects/turboant-x7-pro.front.master.1620657647279.jpg" />
              </td>
              <td>Patineta electrica</td>
              <td>1/6/2023</td>
              <td>$1.500</td>
              <td>
                <button type="button" class="btn btn-primary " id="fila_4">
                  Alquilar
                </button>
                <button type="button" class="btn btn-primary">
                  Reservar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppStationDetails;
