/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 498.0, "series": [{"data": [[0.0, 9.0], [0.1, 9.0], [0.2, 9.0], [0.3, 9.0], [0.4, 9.0], [0.5, 9.0], [0.6, 9.0], [0.7, 23.0], [0.8, 23.0], [0.9, 23.0], [1.0, 23.0], [1.1, 23.0], [1.2, 23.0], [1.3, 23.0], [1.4, 40.0], [1.5, 40.0], [1.6, 40.0], [1.7, 40.0], [1.8, 40.0], [1.9, 40.0], [2.0, 40.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 42.0], [2.6, 42.0], [2.7, 46.0], [2.8, 46.0], [2.9, 46.0], [3.0, 46.0], [3.1, 46.0], [3.2, 46.0], [3.3, 46.0], [3.4, 47.0], [3.5, 47.0], [3.6, 47.0], [3.7, 47.0], [3.8, 47.0], [3.9, 47.0], [4.0, 47.0], [4.1, 53.0], [4.2, 53.0], [4.3, 53.0], [4.4, 53.0], [4.5, 53.0], [4.6, 53.0], [4.7, 57.0], [4.8, 57.0], [4.9, 57.0], [5.0, 57.0], [5.1, 57.0], [5.2, 57.0], [5.3, 57.0], [5.4, 85.0], [5.5, 85.0], [5.6, 85.0], [5.7, 85.0], [5.8, 85.0], [5.9, 85.0], [6.0, 85.0], [6.1, 89.0], [6.2, 89.0], [6.3, 89.0], [6.4, 89.0], [6.5, 89.0], [6.6, 89.0], [6.7, 89.0], [6.8, 108.0], [6.9, 108.0], [7.0, 108.0], [7.1, 108.0], [7.2, 108.0], [7.3, 108.0], [7.4, 130.0], [7.5, 130.0], [7.6, 130.0], [7.7, 130.0], [7.8, 130.0], [7.9, 130.0], [8.0, 130.0], [8.1, 134.0], [8.2, 134.0], [8.3, 134.0], [8.4, 134.0], [8.5, 134.0], [8.6, 134.0], [8.7, 134.0], [8.8, 136.0], [8.9, 136.0], [9.0, 136.0], [9.1, 136.0], [9.2, 136.0], [9.3, 136.0], [9.4, 149.0], [9.5, 149.0], [9.6, 149.0], [9.7, 149.0], [9.8, 149.0], [9.9, 149.0], [10.0, 149.0], [10.1, 151.0], [10.2, 151.0], [10.3, 151.0], [10.4, 151.0], [10.5, 151.0], [10.6, 151.0], [10.7, 151.0], [10.8, 152.0], [10.9, 152.0], [11.0, 152.0], [11.1, 152.0], [11.2, 152.0], [11.3, 152.0], [11.4, 152.0], [11.5, 157.0], [11.6, 157.0], [11.7, 157.0], [11.8, 157.0], [11.9, 157.0], [12.0, 157.0], [12.1, 158.0], [12.2, 158.0], [12.3, 158.0], [12.4, 158.0], [12.5, 158.0], [12.6, 158.0], [12.7, 158.0], [12.8, 169.0], [12.9, 169.0], [13.0, 169.0], [13.1, 169.0], [13.2, 169.0], [13.3, 169.0], [13.4, 169.0], [13.5, 169.0], [13.6, 169.0], [13.7, 169.0], [13.8, 169.0], [13.9, 169.0], [14.0, 169.0], [14.1, 169.0], [14.2, 169.0], [14.3, 169.0], [14.4, 169.0], [14.5, 169.0], [14.6, 169.0], [14.7, 169.0], [14.8, 175.0], [14.9, 175.0], [15.0, 175.0], [15.1, 175.0], [15.2, 175.0], [15.3, 175.0], [15.4, 175.0], [15.5, 176.0], [15.6, 176.0], [15.7, 176.0], [15.8, 176.0], [15.9, 176.0], [16.0, 176.0], [16.1, 176.0], [16.2, 181.0], [16.3, 181.0], [16.4, 181.0], [16.5, 181.0], [16.6, 181.0], [16.7, 181.0], [16.8, 183.0], [16.9, 183.0], [17.0, 183.0], [17.1, 183.0], [17.2, 183.0], [17.3, 183.0], [17.4, 183.0], [17.5, 185.0], [17.6, 185.0], [17.7, 185.0], [17.8, 185.0], [17.9, 185.0], [18.0, 185.0], [18.1, 185.0], [18.2, 188.0], [18.3, 188.0], [18.4, 188.0], [18.5, 188.0], [18.6, 188.0], [18.7, 188.0], [18.8, 191.0], [18.9, 191.0], [19.0, 191.0], [19.1, 191.0], [19.2, 191.0], [19.3, 191.0], [19.4, 191.0], [19.5, 193.0], [19.6, 193.0], [19.7, 193.0], [19.8, 193.0], [19.9, 193.0], [20.0, 193.0], [20.1, 193.0], [20.2, 194.0], [20.3, 194.0], [20.4, 194.0], [20.5, 194.0], [20.6, 194.0], [20.7, 194.0], [20.8, 194.0], [20.9, 194.0], [21.0, 194.0], [21.1, 194.0], [21.2, 194.0], [21.3, 194.0], [21.4, 194.0], [21.5, 195.0], [21.6, 195.0], [21.7, 195.0], [21.8, 195.0], [21.9, 195.0], [22.0, 195.0], [22.1, 195.0], [22.2, 196.0], [22.3, 196.0], [22.4, 196.0], [22.5, 196.0], [22.6, 196.0], [22.7, 196.0], [22.8, 196.0], [22.9, 199.0], [23.0, 199.0], [23.1, 199.0], [23.2, 199.0], [23.3, 199.0], [23.4, 199.0], [23.5, 200.0], [23.6, 200.0], [23.7, 200.0], [23.8, 200.0], [23.9, 200.0], [24.0, 200.0], [24.1, 200.0], [24.2, 202.0], [24.3, 202.0], [24.4, 202.0], [24.5, 202.0], [24.6, 202.0], [24.7, 202.0], [24.8, 202.0], [24.9, 202.0], [25.0, 202.0], [25.1, 202.0], [25.2, 202.0], [25.3, 202.0], [25.4, 202.0], [25.5, 202.0], [25.6, 203.0], [25.7, 203.0], [25.8, 203.0], [25.9, 203.0], [26.0, 203.0], [26.1, 203.0], [26.2, 206.0], [26.3, 206.0], [26.4, 206.0], [26.5, 206.0], [26.6, 206.0], [26.7, 206.0], [26.8, 206.0], [26.9, 206.0], [27.0, 206.0], [27.1, 206.0], [27.2, 206.0], [27.3, 206.0], [27.4, 206.0], [27.5, 206.0], [27.6, 206.0], [27.7, 206.0], [27.8, 206.0], [27.9, 206.0], [28.0, 206.0], [28.1, 206.0], [28.2, 207.0], [28.3, 207.0], [28.4, 207.0], [28.5, 207.0], [28.6, 207.0], [28.7, 207.0], [28.8, 207.0], [28.9, 208.0], [29.0, 208.0], [29.1, 208.0], [29.2, 208.0], [29.3, 208.0], [29.4, 208.0], [29.5, 208.0], [29.6, 208.0], [29.7, 208.0], [29.8, 208.0], [29.9, 208.0], [30.0, 208.0], [30.1, 208.0], [30.2, 208.0], [30.3, 211.0], [30.4, 211.0], [30.5, 211.0], [30.6, 211.0], [30.7, 211.0], [30.8, 211.0], [30.9, 211.0], [31.0, 211.0], [31.1, 211.0], [31.2, 211.0], [31.3, 211.0], [31.4, 211.0], [31.5, 211.0], [31.6, 211.0], [31.7, 211.0], [31.8, 211.0], [31.9, 211.0], [32.0, 211.0], [32.1, 211.0], [32.2, 211.0], [32.3, 212.0], [32.4, 212.0], [32.5, 212.0], [32.6, 212.0], [32.7, 212.0], [32.8, 212.0], [32.9, 213.0], [33.0, 213.0], [33.1, 213.0], [33.2, 213.0], [33.3, 213.0], [33.4, 213.0], [33.5, 213.0], [33.6, 213.0], [33.7, 213.0], [33.8, 213.0], [33.9, 213.0], [34.0, 213.0], [34.1, 213.0], [34.2, 213.0], [34.3, 215.0], [34.4, 215.0], [34.5, 215.0], [34.6, 215.0], [34.7, 215.0], [34.8, 215.0], [34.9, 218.0], [35.0, 218.0], [35.1, 218.0], [35.2, 218.0], [35.3, 218.0], [35.4, 218.0], [35.5, 218.0], [35.6, 219.0], [35.7, 219.0], [35.8, 219.0], [35.9, 219.0], [36.0, 219.0], [36.1, 219.0], [36.2, 219.0], [36.3, 223.0], [36.4, 223.0], [36.5, 223.0], [36.6, 223.0], [36.7, 223.0], [36.8, 223.0], [36.9, 223.0], [37.0, 224.0], [37.1, 224.0], [37.2, 224.0], [37.3, 224.0], [37.4, 224.0], [37.5, 224.0], [37.6, 233.0], [37.7, 233.0], [37.8, 233.0], [37.9, 233.0], [38.0, 233.0], [38.1, 233.0], [38.2, 233.0], [38.3, 240.0], [38.4, 240.0], [38.5, 240.0], [38.6, 240.0], [38.7, 240.0], [38.8, 240.0], [38.9, 240.0], [39.0, 246.0], [39.1, 246.0], [39.2, 246.0], [39.3, 246.0], [39.4, 246.0], [39.5, 246.0], [39.6, 247.0], [39.7, 247.0], [39.8, 247.0], [39.9, 247.0], [40.0, 247.0], [40.1, 247.0], [40.2, 247.0], [40.3, 255.0], [40.4, 255.0], [40.5, 255.0], [40.6, 255.0], [40.7, 255.0], [40.8, 255.0], [40.9, 255.0], [41.0, 256.0], [41.1, 256.0], [41.2, 256.0], [41.3, 256.0], [41.4, 256.0], [41.5, 256.0], [41.6, 256.0], [41.7, 259.0], [41.8, 259.0], [41.9, 259.0], [42.0, 259.0], [42.1, 259.0], [42.2, 259.0], [42.3, 260.0], [42.4, 260.0], [42.5, 260.0], [42.6, 260.0], [42.7, 260.0], [42.8, 260.0], [42.9, 260.0], [43.0, 261.0], [43.1, 261.0], [43.2, 261.0], [43.3, 261.0], [43.4, 261.0], [43.5, 261.0], [43.6, 261.0], [43.7, 265.0], [43.8, 265.0], [43.9, 265.0], [44.0, 265.0], [44.1, 265.0], [44.2, 265.0], [44.3, 266.0], [44.4, 266.0], [44.5, 266.0], [44.6, 266.0], [44.7, 266.0], [44.8, 266.0], [44.9, 266.0], [45.0, 266.0], [45.1, 266.0], [45.2, 266.0], [45.3, 266.0], [45.4, 266.0], [45.5, 266.0], [45.6, 266.0], [45.7, 267.0], [45.8, 267.0], [45.9, 267.0], [46.0, 267.0], [46.1, 267.0], [46.2, 267.0], [46.3, 267.0], [46.4, 269.0], [46.5, 269.0], [46.6, 269.0], [46.7, 269.0], [46.8, 269.0], [46.9, 269.0], [47.0, 270.0], [47.1, 270.0], [47.2, 270.0], [47.3, 270.0], [47.4, 270.0], [47.5, 270.0], [47.6, 270.0], [47.7, 273.0], [47.8, 273.0], [47.9, 273.0], [48.0, 273.0], [48.1, 273.0], [48.2, 273.0], [48.3, 273.0], [48.4, 275.0], [48.5, 275.0], [48.6, 275.0], [48.7, 275.0], [48.8, 275.0], [48.9, 275.0], [49.0, 278.0], [49.1, 278.0], [49.2, 278.0], [49.3, 278.0], [49.4, 278.0], [49.5, 278.0], [49.6, 278.0], [49.7, 281.0], [49.8, 281.0], [49.9, 281.0], [50.0, 281.0], [50.1, 281.0], [50.2, 281.0], [50.3, 281.0], [50.4, 283.0], [50.5, 283.0], [50.6, 283.0], [50.7, 283.0], [50.8, 283.0], [50.9, 283.0], [51.0, 283.0], [51.1, 285.0], [51.2, 285.0], [51.3, 285.0], [51.4, 285.0], [51.5, 285.0], [51.6, 285.0], [51.7, 285.0], [51.8, 285.0], [51.9, 285.0], [52.0, 285.0], [52.1, 285.0], [52.2, 285.0], [52.3, 285.0], [52.4, 287.0], [52.5, 287.0], [52.6, 287.0], [52.7, 287.0], [52.8, 287.0], [52.9, 287.0], [53.0, 287.0], [53.1, 301.0], [53.2, 301.0], [53.3, 301.0], [53.4, 301.0], [53.5, 301.0], [53.6, 301.0], [53.7, 303.0], [53.8, 303.0], [53.9, 303.0], [54.0, 303.0], [54.1, 303.0], [54.2, 303.0], [54.3, 303.0], [54.4, 303.0], [54.5, 303.0], [54.6, 303.0], [54.7, 303.0], [54.8, 303.0], [54.9, 303.0], [55.0, 303.0], [55.1, 304.0], [55.2, 304.0], [55.3, 304.0], [55.4, 304.0], [55.5, 304.0], [55.6, 304.0], [55.7, 304.0], [55.8, 305.0], [55.9, 305.0], [56.0, 305.0], [56.1, 305.0], [56.2, 305.0], [56.3, 305.0], [56.4, 308.0], [56.5, 308.0], [56.6, 308.0], [56.7, 308.0], [56.8, 308.0], [56.9, 308.0], [57.0, 308.0], [57.1, 310.0], [57.2, 310.0], [57.3, 310.0], [57.4, 310.0], [57.5, 310.0], [57.6, 310.0], [57.7, 310.0], [57.8, 313.0], [57.9, 313.0], [58.0, 313.0], [58.1, 313.0], [58.2, 313.0], [58.3, 313.0], [58.4, 315.0], [58.5, 315.0], [58.6, 315.0], [58.7, 315.0], [58.8, 315.0], [58.9, 315.0], [59.0, 315.0], [59.1, 317.0], [59.2, 317.0], [59.3, 317.0], [59.4, 317.0], [59.5, 317.0], [59.6, 317.0], [59.7, 317.0], [59.8, 320.0], [59.9, 320.0], [60.0, 320.0], [60.1, 320.0], [60.2, 320.0], [60.3, 320.0], [60.4, 320.0], [60.5, 321.0], [60.6, 321.0], [60.7, 321.0], [60.8, 321.0], [60.9, 321.0], [61.0, 321.0], [61.1, 323.0], [61.2, 323.0], [61.3, 323.0], [61.4, 323.0], [61.5, 323.0], [61.6, 323.0], [61.7, 323.0], [61.8, 323.0], [61.9, 323.0], [62.0, 323.0], [62.1, 323.0], [62.2, 323.0], [62.3, 323.0], [62.4, 323.0], [62.5, 336.0], [62.6, 336.0], [62.7, 336.0], [62.8, 336.0], [62.9, 336.0], [63.0, 336.0], [63.1, 337.0], [63.2, 337.0], [63.3, 337.0], [63.4, 337.0], [63.5, 337.0], [63.6, 337.0], [63.7, 337.0], [63.8, 340.0], [63.9, 340.0], [64.0, 340.0], [64.1, 340.0], [64.2, 340.0], [64.3, 340.0], [64.4, 340.0], [64.5, 340.0], [64.6, 340.0], [64.7, 340.0], [64.8, 340.0], [64.9, 340.0], [65.0, 340.0], [65.1, 340.0], [65.2, 343.0], [65.3, 343.0], [65.4, 343.0], [65.5, 343.0], [65.6, 343.0], [65.7, 343.0], [65.8, 344.0], [65.9, 344.0], [66.0, 344.0], [66.1, 344.0], [66.2, 344.0], [66.3, 344.0], [66.4, 344.0], [66.5, 344.0], [66.6, 344.0], [66.7, 344.0], [66.8, 344.0], [66.9, 344.0], [67.0, 344.0], [67.1, 344.0], [67.2, 345.0], [67.3, 345.0], [67.4, 345.0], [67.5, 345.0], [67.6, 345.0], [67.7, 345.0], [67.8, 345.0], [67.9, 345.0], [68.0, 345.0], [68.1, 345.0], [68.2, 345.0], [68.3, 345.0], [68.4, 345.0], [68.5, 347.0], [68.6, 347.0], [68.7, 347.0], [68.8, 347.0], [68.9, 347.0], [69.0, 347.0], [69.1, 347.0], [69.2, 347.0], [69.3, 347.0], [69.4, 347.0], [69.5, 347.0], [69.6, 347.0], [69.7, 347.0], [69.8, 347.0], [69.9, 347.0], [70.0, 347.0], [70.1, 347.0], [70.2, 347.0], [70.3, 347.0], [70.4, 347.0], [70.5, 349.0], [70.6, 349.0], [70.7, 349.0], [70.8, 349.0], [70.9, 349.0], [71.0, 349.0], [71.1, 349.0], [71.2, 349.0], [71.3, 349.0], [71.4, 349.0], [71.5, 349.0], [71.6, 349.0], [71.7, 349.0], [71.8, 349.0], [71.9, 349.0], [72.0, 349.0], [72.1, 349.0], [72.2, 349.0], [72.3, 349.0], [72.4, 349.0], [72.5, 350.0], [72.6, 350.0], [72.7, 350.0], [72.8, 350.0], [72.9, 350.0], [73.0, 350.0], [73.1, 350.0], [73.2, 351.0], [73.3, 351.0], [73.4, 351.0], [73.5, 351.0], [73.6, 351.0], [73.7, 351.0], [73.8, 351.0], [73.9, 351.0], [74.0, 351.0], [74.1, 351.0], [74.2, 351.0], [74.3, 351.0], [74.4, 351.0], [74.5, 353.0], [74.6, 353.0], [74.7, 353.0], [74.8, 353.0], [74.9, 353.0], [75.0, 353.0], [75.1, 353.0], [75.2, 354.0], [75.3, 354.0], [75.4, 354.0], [75.5, 354.0], [75.6, 354.0], [75.7, 354.0], [75.8, 354.0], [75.9, 357.0], [76.0, 357.0], [76.1, 357.0], [76.2, 357.0], [76.3, 357.0], [76.4, 357.0], [76.5, 357.0], [76.6, 358.0], [76.7, 358.0], [76.8, 358.0], [76.9, 358.0], [77.0, 358.0], [77.1, 358.0], [77.2, 359.0], [77.3, 359.0], [77.4, 359.0], [77.5, 359.0], [77.6, 359.0], [77.7, 359.0], [77.8, 359.0], [77.9, 361.0], [78.0, 361.0], [78.1, 361.0], [78.2, 361.0], [78.3, 361.0], [78.4, 361.0], [78.5, 361.0], [78.6, 371.0], [78.7, 371.0], [78.8, 371.0], [78.9, 371.0], [79.0, 371.0], [79.1, 371.0], [79.2, 371.0], [79.3, 371.0], [79.4, 371.0], [79.5, 371.0], [79.6, 371.0], [79.7, 371.0], [79.8, 371.0], [79.9, 371.0], [80.0, 371.0], [80.1, 371.0], [80.2, 371.0], [80.3, 371.0], [80.4, 371.0], [80.5, 371.0], [80.6, 391.0], [80.7, 391.0], [80.8, 391.0], [80.9, 391.0], [81.0, 391.0], [81.1, 391.0], [81.2, 391.0], [81.3, 391.0], [81.4, 391.0], [81.5, 391.0], [81.6, 391.0], [81.7, 391.0], [81.8, 391.0], [81.9, 396.0], [82.0, 396.0], [82.1, 396.0], [82.2, 396.0], [82.3, 396.0], [82.4, 396.0], [82.5, 396.0], [82.6, 398.0], [82.7, 398.0], [82.8, 398.0], [82.9, 398.0], [83.0, 398.0], [83.1, 398.0], [83.2, 398.0], [83.3, 402.0], [83.4, 402.0], [83.5, 402.0], [83.6, 402.0], [83.7, 402.0], [83.8, 402.0], [83.9, 403.0], [84.0, 403.0], [84.1, 403.0], [84.2, 403.0], [84.3, 403.0], [84.4, 403.0], [84.5, 403.0], [84.6, 406.0], [84.7, 406.0], [84.8, 406.0], [84.9, 406.0], [85.0, 406.0], [85.1, 406.0], [85.2, 406.0], [85.3, 411.0], [85.4, 411.0], [85.5, 411.0], [85.6, 411.0], [85.7, 411.0], [85.8, 411.0], [85.9, 411.0], [86.0, 411.0], [86.1, 411.0], [86.2, 411.0], [86.3, 411.0], [86.4, 411.0], [86.5, 411.0], [86.6, 411.0], [86.7, 411.0], [86.8, 411.0], [86.9, 411.0], [87.0, 411.0], [87.1, 411.0], [87.2, 411.0], [87.3, 413.0], [87.4, 413.0], [87.5, 413.0], [87.6, 413.0], [87.7, 413.0], [87.8, 413.0], [87.9, 413.0], [88.0, 415.0], [88.1, 415.0], [88.2, 415.0], [88.3, 415.0], [88.4, 415.0], [88.5, 415.0], [88.6, 416.0], [88.7, 416.0], [88.8, 416.0], [88.9, 416.0], [89.0, 416.0], [89.1, 416.0], [89.2, 416.0], [89.3, 416.0], [89.4, 416.0], [89.5, 416.0], [89.6, 416.0], [89.7, 416.0], [89.8, 416.0], [89.9, 416.0], [90.0, 417.0], [90.1, 417.0], [90.2, 417.0], [90.3, 417.0], [90.4, 417.0], [90.5, 417.0], [90.6, 417.0], [90.7, 417.0], [90.8, 417.0], [90.9, 417.0], [91.0, 417.0], [91.1, 417.0], [91.2, 417.0], [91.3, 419.0], [91.4, 419.0], [91.5, 419.0], [91.6, 419.0], [91.7, 419.0], [91.8, 419.0], [91.9, 419.0], [92.0, 420.0], [92.1, 420.0], [92.2, 420.0], [92.3, 420.0], [92.4, 420.0], [92.5, 420.0], [92.6, 420.0], [92.7, 422.0], [92.8, 422.0], [92.9, 422.0], [93.0, 422.0], [93.1, 422.0], [93.2, 422.0], [93.3, 423.0], [93.4, 423.0], [93.5, 423.0], [93.6, 423.0], [93.7, 423.0], [93.8, 423.0], [93.9, 423.0], [94.0, 425.0], [94.1, 425.0], [94.2, 425.0], [94.3, 425.0], [94.4, 425.0], [94.5, 425.0], [94.6, 425.0], [94.7, 425.0], [94.8, 425.0], [94.9, 425.0], [95.0, 425.0], [95.1, 425.0], [95.2, 425.0], [95.3, 425.0], [95.4, 427.0], [95.5, 427.0], [95.6, 427.0], [95.7, 427.0], [95.8, 427.0], [95.9, 427.0], [96.0, 429.0], [96.1, 429.0], [96.2, 429.0], [96.3, 429.0], [96.4, 429.0], [96.5, 429.0], [96.6, 429.0], [96.7, 476.0], [96.8, 476.0], [96.9, 476.0], [97.0, 476.0], [97.1, 476.0], [97.2, 476.0], [97.3, 476.0], [97.4, 482.0], [97.5, 482.0], [97.6, 482.0], [97.7, 482.0], [97.8, 482.0], [97.9, 482.0], [98.0, 483.0], [98.1, 483.0], [98.2, 483.0], [98.3, 483.0], [98.4, 483.0], [98.5, 483.0], [98.6, 483.0], [98.7, 484.0], [98.8, 484.0], [98.9, 484.0], [99.0, 484.0], [99.1, 484.0], [99.2, 484.0], [99.3, 484.0], [99.4, 498.0], [99.5, 498.0], [99.6, 498.0], [99.7, 498.0], [99.8, 498.0], [99.9, 498.0], [100.0, 498.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 10.0, "minX": 0.0, "maxY": 45.0, "series": [{"data": [[0.0, 10.0], [300.0, 45.0], [100.0, 25.0], [200.0, 44.0], [400.0, 25.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 149.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 149.0, "series": [{"data": [[0.0, 149.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.97986577181208, "minX": 1.60438908E12, "maxY": 8.97986577181208, "series": [{"data": [[1.60438908E12, 8.97986577181208]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 92.5, "minX": 1.0, "maxY": 313.5044247787611, "series": [{"data": [[4.0, 92.5], [8.0, 212.5], [2.0, 265.0], [1.0, 266.0], [9.0, 190.85714285714286], [5.0, 204.0], [10.0, 313.5044247787611], [3.0, 97.0], [6.0, 218.8], [7.0, 157.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[8.97986577181208, 277.91946308724835]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1265.8666666666666, "minX": 1.60438908E12, "maxY": 4616.033333333334, "series": [{"data": [[1.60438908E12, 4616.033333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60438908E12, 1265.8666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 277.91946308724835, "minX": 1.60438908E12, "maxY": 277.91946308724835, "series": [{"data": [[1.60438908E12, 277.91946308724835]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 277.7382550335572, "minX": 1.60438908E12, "maxY": 277.7382550335572, "series": [{"data": [[1.60438908E12, 277.7382550335572]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.6308724832214762, "minX": 1.60438908E12, "maxY": 0.6308724832214762, "series": [{"data": [[1.60438908E12, 0.6308724832214762]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 9.0, "minX": 1.60438908E12, "maxY": 498.0, "series": [{"data": [[1.60438908E12, 498.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60438908E12, 13.899999499320984]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60438908E12, 15.790000200271606]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60438908E12, 14.949999749660492]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60438908E12, 9.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60438908E12, 281.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 211.0, "minX": 22.0, "maxY": 340.0, "series": [{"data": [[33.0, 304.0], [32.0, 340.0], [22.0, 320.5], [31.0, 211.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 210.5, "minX": 22.0, "maxY": 340.0, "series": [{"data": [[33.0, 304.0], [32.0, 340.0], [22.0, 320.5], [31.0, 210.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 33.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60438908E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60438908E12, 2.4833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60438908E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60438908E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60438908E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60438908E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60438908E12, 2.4833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.4833333333333334, "minX": 1.60438908E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60438908E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60438908E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

