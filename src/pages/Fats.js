import React from "react";
import './Fats.css';
class Fats extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Fats">
        <h2>Nutrition Facts</h2>

        <table>
          <tr>
            <th>Total Fat: 100g</th>
            <th>Saturated fat</th>
            <th>Polyunsaturated fat</th>
            <th>Monounsaturated fat</th>
          </tr>
          <tr>
            <td>Olive</td>
            <td>49g</td>
            <td>9g</td>
            <td>37g</td>
          </tr>
          <tr>
            <td>SunFlower</td>
            <td>14g</td>
            <td>11g</td>
            <td>73g</td>
          </tr>
          <tr>
            <td>Mustard</td>
            <td>13g</td>
            <td>36g</td>
            <td>46g</td>
          </tr>
          <tr>
            <td>Palm</td>
            <td>12g</td>
            <td>21g</td>
            <td>59g</td>
          </tr>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>0000</td>
            <td>0000</td>
            <td>0000</td>
            <td>0000</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Fats;
