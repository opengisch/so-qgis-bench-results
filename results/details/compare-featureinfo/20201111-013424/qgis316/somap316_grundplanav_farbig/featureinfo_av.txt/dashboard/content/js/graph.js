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
        data: {"result": {"minY": 12.0, "minX": 0.0, "maxY": 523.0, "series": [{"data": [[0.0, 12.0], [0.1, 12.0], [0.2, 12.0], [0.3, 12.0], [0.4, 12.0], [0.5, 12.0], [0.6, 12.0], [0.7, 29.0], [0.8, 29.0], [0.9, 29.0], [1.0, 29.0], [1.1, 29.0], [1.2, 29.0], [1.3, 29.0], [1.4, 43.0], [1.5, 43.0], [1.6, 43.0], [1.7, 43.0], [1.8, 43.0], [1.9, 43.0], [2.0, 43.0], [2.1, 58.0], [2.2, 58.0], [2.3, 58.0], [2.4, 58.0], [2.5, 58.0], [2.6, 58.0], [2.7, 72.0], [2.8, 72.0], [2.9, 72.0], [3.0, 72.0], [3.1, 72.0], [3.2, 72.0], [3.3, 72.0], [3.4, 73.0], [3.5, 73.0], [3.6, 73.0], [3.7, 73.0], [3.8, 73.0], [3.9, 73.0], [4.0, 73.0], [4.1, 74.0], [4.2, 74.0], [4.3, 74.0], [4.4, 74.0], [4.5, 74.0], [4.6, 74.0], [4.7, 85.0], [4.8, 85.0], [4.9, 85.0], [5.0, 85.0], [5.1, 85.0], [5.2, 85.0], [5.3, 85.0], [5.4, 87.0], [5.5, 87.0], [5.6, 87.0], [5.7, 87.0], [5.8, 87.0], [5.9, 87.0], [6.0, 87.0], [6.1, 94.0], [6.2, 94.0], [6.3, 94.0], [6.4, 94.0], [6.5, 94.0], [6.6, 94.0], [6.7, 94.0], [6.8, 142.0], [6.9, 142.0], [7.0, 142.0], [7.1, 142.0], [7.2, 142.0], [7.3, 142.0], [7.4, 151.0], [7.5, 151.0], [7.6, 151.0], [7.7, 151.0], [7.8, 151.0], [7.9, 151.0], [8.0, 151.0], [8.1, 154.0], [8.2, 154.0], [8.3, 154.0], [8.4, 154.0], [8.5, 154.0], [8.6, 154.0], [8.7, 154.0], [8.8, 160.0], [8.9, 160.0], [9.0, 160.0], [9.1, 160.0], [9.2, 160.0], [9.3, 160.0], [9.4, 172.0], [9.5, 172.0], [9.6, 172.0], [9.7, 172.0], [9.8, 172.0], [9.9, 172.0], [10.0, 172.0], [10.1, 201.0], [10.2, 201.0], [10.3, 201.0], [10.4, 201.0], [10.5, 201.0], [10.6, 201.0], [10.7, 201.0], [10.8, 207.0], [10.9, 207.0], [11.0, 207.0], [11.1, 207.0], [11.2, 207.0], [11.3, 207.0], [11.4, 207.0], [11.5, 207.0], [11.6, 207.0], [11.7, 207.0], [11.8, 207.0], [11.9, 207.0], [12.0, 207.0], [12.1, 207.0], [12.2, 207.0], [12.3, 207.0], [12.4, 207.0], [12.5, 207.0], [12.6, 207.0], [12.7, 207.0], [12.8, 209.0], [12.9, 209.0], [13.0, 209.0], [13.1, 209.0], [13.2, 209.0], [13.3, 209.0], [13.4, 209.0], [13.5, 209.0], [13.6, 209.0], [13.7, 209.0], [13.8, 209.0], [13.9, 209.0], [14.0, 209.0], [14.1, 209.0], [14.2, 209.0], [14.3, 209.0], [14.4, 209.0], [14.5, 209.0], [14.6, 209.0], [14.7, 209.0], [14.8, 212.0], [14.9, 212.0], [15.0, 212.0], [15.1, 212.0], [15.2, 212.0], [15.3, 212.0], [15.4, 212.0], [15.5, 212.0], [15.6, 212.0], [15.7, 212.0], [15.8, 212.0], [15.9, 212.0], [16.0, 212.0], [16.1, 212.0], [16.2, 214.0], [16.3, 214.0], [16.4, 214.0], [16.5, 214.0], [16.6, 214.0], [16.7, 214.0], [16.8, 215.0], [16.9, 215.0], [17.0, 215.0], [17.1, 215.0], [17.2, 215.0], [17.3, 215.0], [17.4, 215.0], [17.5, 219.0], [17.6, 219.0], [17.7, 219.0], [17.8, 219.0], [17.9, 219.0], [18.0, 219.0], [18.1, 219.0], [18.2, 220.0], [18.3, 220.0], [18.4, 220.0], [18.5, 220.0], [18.6, 220.0], [18.7, 220.0], [18.8, 220.0], [18.9, 220.0], [19.0, 220.0], [19.1, 220.0], [19.2, 220.0], [19.3, 220.0], [19.4, 220.0], [19.5, 221.0], [19.6, 221.0], [19.7, 221.0], [19.8, 221.0], [19.9, 221.0], [20.0, 221.0], [20.1, 221.0], [20.2, 222.0], [20.3, 222.0], [20.4, 222.0], [20.5, 222.0], [20.6, 222.0], [20.7, 222.0], [20.8, 222.0], [20.9, 222.0], [21.0, 222.0], [21.1, 222.0], [21.2, 222.0], [21.3, 222.0], [21.4, 222.0], [21.5, 223.0], [21.6, 223.0], [21.7, 223.0], [21.8, 223.0], [21.9, 223.0], [22.0, 223.0], [22.1, 223.0], [22.2, 223.0], [22.3, 223.0], [22.4, 223.0], [22.5, 223.0], [22.6, 223.0], [22.7, 223.0], [22.8, 223.0], [22.9, 223.0], [23.0, 223.0], [23.1, 223.0], [23.2, 223.0], [23.3, 223.0], [23.4, 223.0], [23.5, 224.0], [23.6, 224.0], [23.7, 224.0], [23.8, 224.0], [23.9, 224.0], [24.0, 224.0], [24.1, 224.0], [24.2, 224.0], [24.3, 224.0], [24.4, 224.0], [24.5, 224.0], [24.6, 224.0], [24.7, 224.0], [24.8, 224.0], [24.9, 224.0], [25.0, 224.0], [25.1, 224.0], [25.2, 224.0], [25.3, 224.0], [25.4, 224.0], [25.5, 224.0], [25.6, 225.0], [25.7, 225.0], [25.8, 225.0], [25.9, 225.0], [26.0, 225.0], [26.1, 225.0], [26.2, 227.0], [26.3, 227.0], [26.4, 227.0], [26.5, 227.0], [26.6, 227.0], [26.7, 227.0], [26.8, 227.0], [26.9, 227.0], [27.0, 227.0], [27.1, 227.0], [27.2, 227.0], [27.3, 227.0], [27.4, 227.0], [27.5, 227.0], [27.6, 229.0], [27.7, 229.0], [27.8, 229.0], [27.9, 229.0], [28.0, 229.0], [28.1, 229.0], [28.2, 230.0], [28.3, 230.0], [28.4, 230.0], [28.5, 230.0], [28.6, 230.0], [28.7, 230.0], [28.8, 230.0], [28.9, 230.0], [29.0, 230.0], [29.1, 230.0], [29.2, 230.0], [29.3, 230.0], [29.4, 230.0], [29.5, 230.0], [29.6, 233.0], [29.7, 233.0], [29.8, 233.0], [29.9, 233.0], [30.0, 233.0], [30.1, 233.0], [30.2, 233.0], [30.3, 234.0], [30.4, 234.0], [30.5, 234.0], [30.6, 234.0], [30.7, 234.0], [30.8, 234.0], [30.9, 239.0], [31.0, 239.0], [31.1, 239.0], [31.2, 239.0], [31.3, 239.0], [31.4, 239.0], [31.5, 239.0], [31.6, 259.0], [31.7, 259.0], [31.8, 259.0], [31.9, 259.0], [32.0, 259.0], [32.1, 259.0], [32.2, 259.0], [32.3, 260.0], [32.4, 260.0], [32.5, 260.0], [32.6, 260.0], [32.7, 260.0], [32.8, 260.0], [32.9, 260.0], [33.0, 260.0], [33.1, 260.0], [33.2, 260.0], [33.3, 260.0], [33.4, 260.0], [33.5, 260.0], [33.6, 262.0], [33.7, 262.0], [33.8, 262.0], [33.9, 262.0], [34.0, 262.0], [34.1, 262.0], [34.2, 262.0], [34.3, 264.0], [34.4, 264.0], [34.5, 264.0], [34.6, 264.0], [34.7, 264.0], [34.8, 264.0], [34.9, 265.0], [35.0, 265.0], [35.1, 265.0], [35.2, 265.0], [35.3, 265.0], [35.4, 265.0], [35.5, 265.0], [35.6, 266.0], [35.7, 266.0], [35.8, 266.0], [35.9, 266.0], [36.0, 266.0], [36.1, 266.0], [36.2, 266.0], [36.3, 267.0], [36.4, 267.0], [36.5, 267.0], [36.6, 267.0], [36.7, 267.0], [36.8, 267.0], [36.9, 267.0], [37.0, 268.0], [37.1, 268.0], [37.2, 268.0], [37.3, 268.0], [37.4, 268.0], [37.5, 268.0], [37.6, 270.0], [37.7, 270.0], [37.8, 270.0], [37.9, 270.0], [38.0, 270.0], [38.1, 270.0], [38.2, 270.0], [38.3, 270.0], [38.4, 270.0], [38.5, 270.0], [38.6, 270.0], [38.7, 270.0], [38.8, 270.0], [38.9, 270.0], [39.0, 271.0], [39.1, 271.0], [39.2, 271.0], [39.3, 271.0], [39.4, 271.0], [39.5, 271.0], [39.6, 271.0], [39.7, 271.0], [39.8, 271.0], [39.9, 271.0], [40.0, 271.0], [40.1, 271.0], [40.2, 271.0], [40.3, 272.0], [40.4, 272.0], [40.5, 272.0], [40.6, 272.0], [40.7, 272.0], [40.8, 272.0], [40.9, 272.0], [41.0, 272.0], [41.1, 272.0], [41.2, 272.0], [41.3, 272.0], [41.4, 272.0], [41.5, 272.0], [41.6, 272.0], [41.7, 274.0], [41.8, 274.0], [41.9, 274.0], [42.0, 274.0], [42.1, 274.0], [42.2, 274.0], [42.3, 275.0], [42.4, 275.0], [42.5, 275.0], [42.6, 275.0], [42.7, 275.0], [42.8, 275.0], [42.9, 275.0], [43.0, 278.0], [43.1, 278.0], [43.2, 278.0], [43.3, 278.0], [43.4, 278.0], [43.5, 278.0], [43.6, 278.0], [43.7, 280.0], [43.8, 280.0], [43.9, 280.0], [44.0, 280.0], [44.1, 280.0], [44.2, 280.0], [44.3, 284.0], [44.4, 284.0], [44.5, 284.0], [44.6, 284.0], [44.7, 284.0], [44.8, 284.0], [44.9, 284.0], [45.0, 285.0], [45.1, 285.0], [45.2, 285.0], [45.3, 285.0], [45.4, 285.0], [45.5, 285.0], [45.6, 285.0], [45.7, 285.0], [45.8, 285.0], [45.9, 285.0], [46.0, 285.0], [46.1, 285.0], [46.2, 285.0], [46.3, 285.0], [46.4, 288.0], [46.5, 288.0], [46.6, 288.0], [46.7, 288.0], [46.8, 288.0], [46.9, 288.0], [47.0, 288.0], [47.1, 288.0], [47.2, 288.0], [47.3, 288.0], [47.4, 288.0], [47.5, 288.0], [47.6, 288.0], [47.7, 291.0], [47.8, 291.0], [47.9, 291.0], [48.0, 291.0], [48.1, 291.0], [48.2, 291.0], [48.3, 291.0], [48.4, 292.0], [48.5, 292.0], [48.6, 292.0], [48.7, 292.0], [48.8, 292.0], [48.9, 292.0], [49.0, 295.0], [49.1, 295.0], [49.2, 295.0], [49.3, 295.0], [49.4, 295.0], [49.5, 295.0], [49.6, 295.0], [49.7, 299.0], [49.8, 299.0], [49.9, 299.0], [50.0, 299.0], [50.1, 299.0], [50.2, 299.0], [50.3, 299.0], [50.4, 300.0], [50.5, 300.0], [50.6, 300.0], [50.7, 300.0], [50.8, 300.0], [50.9, 300.0], [51.0, 300.0], [51.1, 301.0], [51.2, 301.0], [51.3, 301.0], [51.4, 301.0], [51.5, 301.0], [51.6, 301.0], [51.7, 302.0], [51.8, 302.0], [51.9, 302.0], [52.0, 302.0], [52.1, 302.0], [52.2, 302.0], [52.3, 302.0], [52.4, 313.0], [52.5, 313.0], [52.6, 313.0], [52.7, 313.0], [52.8, 313.0], [52.9, 313.0], [53.0, 313.0], [53.1, 317.0], [53.2, 317.0], [53.3, 317.0], [53.4, 317.0], [53.5, 317.0], [53.6, 317.0], [53.7, 317.0], [53.8, 317.0], [53.9, 317.0], [54.0, 317.0], [54.1, 317.0], [54.2, 317.0], [54.3, 317.0], [54.4, 320.0], [54.5, 320.0], [54.6, 320.0], [54.7, 320.0], [54.8, 320.0], [54.9, 320.0], [55.0, 320.0], [55.1, 320.0], [55.2, 320.0], [55.3, 320.0], [55.4, 320.0], [55.5, 320.0], [55.6, 320.0], [55.7, 320.0], [55.8, 321.0], [55.9, 321.0], [56.0, 321.0], [56.1, 321.0], [56.2, 321.0], [56.3, 321.0], [56.4, 324.0], [56.5, 324.0], [56.6, 324.0], [56.7, 324.0], [56.8, 324.0], [56.9, 324.0], [57.0, 324.0], [57.1, 327.0], [57.2, 327.0], [57.3, 327.0], [57.4, 327.0], [57.5, 327.0], [57.6, 327.0], [57.7, 327.0], [57.8, 327.0], [57.9, 327.0], [58.0, 327.0], [58.1, 327.0], [58.2, 327.0], [58.3, 327.0], [58.4, 328.0], [58.5, 328.0], [58.6, 328.0], [58.7, 328.0], [58.8, 328.0], [58.9, 328.0], [59.0, 328.0], [59.1, 329.0], [59.2, 329.0], [59.3, 329.0], [59.4, 329.0], [59.5, 329.0], [59.6, 329.0], [59.7, 329.0], [59.8, 332.0], [59.9, 332.0], [60.0, 332.0], [60.1, 332.0], [60.2, 332.0], [60.3, 332.0], [60.4, 332.0], [60.5, 333.0], [60.6, 333.0], [60.7, 333.0], [60.8, 333.0], [60.9, 333.0], [61.0, 333.0], [61.1, 334.0], [61.2, 334.0], [61.3, 334.0], [61.4, 334.0], [61.5, 334.0], [61.6, 334.0], [61.7, 334.0], [61.8, 336.0], [61.9, 336.0], [62.0, 336.0], [62.1, 336.0], [62.2, 336.0], [62.3, 336.0], [62.4, 336.0], [62.5, 337.0], [62.6, 337.0], [62.7, 337.0], [62.8, 337.0], [62.9, 337.0], [63.0, 337.0], [63.1, 338.0], [63.2, 338.0], [63.3, 338.0], [63.4, 338.0], [63.5, 338.0], [63.6, 338.0], [63.7, 338.0], [63.8, 340.0], [63.9, 340.0], [64.0, 340.0], [64.1, 340.0], [64.2, 340.0], [64.3, 340.0], [64.4, 340.0], [64.5, 341.0], [64.6, 341.0], [64.7, 341.0], [64.8, 341.0], [64.9, 341.0], [65.0, 341.0], [65.1, 341.0], [65.2, 344.0], [65.3, 344.0], [65.4, 344.0], [65.5, 344.0], [65.6, 344.0], [65.7, 344.0], [65.8, 344.0], [65.9, 344.0], [66.0, 344.0], [66.1, 344.0], [66.2, 344.0], [66.3, 344.0], [66.4, 344.0], [66.5, 345.0], [66.6, 345.0], [66.7, 345.0], [66.8, 345.0], [66.9, 345.0], [67.0, 345.0], [67.1, 345.0], [67.2, 345.0], [67.3, 345.0], [67.4, 345.0], [67.5, 345.0], [67.6, 345.0], [67.7, 345.0], [67.8, 345.0], [67.9, 345.0], [68.0, 345.0], [68.1, 345.0], [68.2, 345.0], [68.3, 345.0], [68.4, 345.0], [68.5, 350.0], [68.6, 350.0], [68.7, 350.0], [68.8, 350.0], [68.9, 350.0], [69.0, 350.0], [69.1, 350.0], [69.2, 350.0], [69.3, 350.0], [69.4, 350.0], [69.5, 350.0], [69.6, 350.0], [69.7, 350.0], [69.8, 352.0], [69.9, 352.0], [70.0, 352.0], [70.1, 352.0], [70.2, 352.0], [70.3, 352.0], [70.4, 352.0], [70.5, 352.0], [70.6, 352.0], [70.7, 352.0], [70.8, 352.0], [70.9, 352.0], [71.0, 352.0], [71.1, 352.0], [71.2, 353.0], [71.3, 353.0], [71.4, 353.0], [71.5, 353.0], [71.6, 353.0], [71.7, 353.0], [71.8, 353.0], [71.9, 353.0], [72.0, 353.0], [72.1, 353.0], [72.2, 353.0], [72.3, 353.0], [72.4, 353.0], [72.5, 353.0], [72.6, 353.0], [72.7, 353.0], [72.8, 353.0], [72.9, 353.0], [73.0, 353.0], [73.1, 353.0], [73.2, 354.0], [73.3, 354.0], [73.4, 354.0], [73.5, 354.0], [73.6, 354.0], [73.7, 354.0], [73.8, 354.0], [73.9, 354.0], [74.0, 354.0], [74.1, 354.0], [74.2, 354.0], [74.3, 354.0], [74.4, 354.0], [74.5, 355.0], [74.6, 355.0], [74.7, 355.0], [74.8, 355.0], [74.9, 355.0], [75.0, 355.0], [75.1, 355.0], [75.2, 355.0], [75.3, 355.0], [75.4, 355.0], [75.5, 355.0], [75.6, 355.0], [75.7, 355.0], [75.8, 355.0], [75.9, 357.0], [76.0, 357.0], [76.1, 357.0], [76.2, 357.0], [76.3, 357.0], [76.4, 357.0], [76.5, 357.0], [76.6, 357.0], [76.7, 357.0], [76.8, 357.0], [76.9, 357.0], [77.0, 357.0], [77.1, 357.0], [77.2, 358.0], [77.3, 358.0], [77.4, 358.0], [77.5, 358.0], [77.6, 358.0], [77.7, 358.0], [77.8, 358.0], [77.9, 359.0], [78.0, 359.0], [78.1, 359.0], [78.2, 359.0], [78.3, 359.0], [78.4, 359.0], [78.5, 359.0], [78.6, 360.0], [78.7, 360.0], [78.8, 360.0], [78.9, 360.0], [79.0, 360.0], [79.1, 360.0], [79.2, 365.0], [79.3, 365.0], [79.4, 365.0], [79.5, 365.0], [79.6, 365.0], [79.7, 365.0], [79.8, 365.0], [79.9, 369.0], [80.0, 369.0], [80.1, 369.0], [80.2, 369.0], [80.3, 369.0], [80.4, 369.0], [80.5, 369.0], [80.6, 381.0], [80.7, 381.0], [80.8, 381.0], [80.9, 381.0], [81.0, 381.0], [81.1, 381.0], [81.2, 381.0], [81.3, 383.0], [81.4, 383.0], [81.5, 383.0], [81.6, 383.0], [81.7, 383.0], [81.8, 383.0], [81.9, 383.0], [82.0, 383.0], [82.1, 383.0], [82.2, 383.0], [82.3, 383.0], [82.4, 383.0], [82.5, 383.0], [82.6, 385.0], [82.7, 385.0], [82.8, 385.0], [82.9, 385.0], [83.0, 385.0], [83.1, 385.0], [83.2, 385.0], [83.3, 388.0], [83.4, 388.0], [83.5, 388.0], [83.6, 388.0], [83.7, 388.0], [83.8, 388.0], [83.9, 389.0], [84.0, 389.0], [84.1, 389.0], [84.2, 389.0], [84.3, 389.0], [84.4, 389.0], [84.5, 389.0], [84.6, 389.0], [84.7, 389.0], [84.8, 389.0], [84.9, 389.0], [85.0, 389.0], [85.1, 389.0], [85.2, 389.0], [85.3, 390.0], [85.4, 390.0], [85.5, 390.0], [85.6, 390.0], [85.7, 390.0], [85.8, 390.0], [85.9, 390.0], [86.0, 391.0], [86.1, 391.0], [86.2, 391.0], [86.3, 391.0], [86.4, 391.0], [86.5, 391.0], [86.6, 397.0], [86.7, 397.0], [86.8, 397.0], [86.9, 397.0], [87.0, 397.0], [87.1, 397.0], [87.2, 397.0], [87.3, 397.0], [87.4, 397.0], [87.5, 397.0], [87.6, 397.0], [87.7, 397.0], [87.8, 397.0], [87.9, 397.0], [88.0, 398.0], [88.1, 398.0], [88.2, 398.0], [88.3, 398.0], [88.4, 398.0], [88.5, 398.0], [88.6, 400.0], [88.7, 400.0], [88.8, 400.0], [88.9, 400.0], [89.0, 400.0], [89.1, 400.0], [89.2, 400.0], [89.3, 407.0], [89.4, 407.0], [89.5, 407.0], [89.6, 407.0], [89.7, 407.0], [89.8, 407.0], [89.9, 407.0], [90.0, 408.0], [90.1, 408.0], [90.2, 408.0], [90.3, 408.0], [90.4, 408.0], [90.5, 408.0], [90.6, 408.0], [90.7, 415.0], [90.8, 415.0], [90.9, 415.0], [91.0, 415.0], [91.1, 415.0], [91.2, 415.0], [91.3, 416.0], [91.4, 416.0], [91.5, 416.0], [91.6, 416.0], [91.7, 416.0], [91.8, 416.0], [91.9, 416.0], [92.0, 425.0], [92.1, 425.0], [92.2, 425.0], [92.3, 425.0], [92.4, 425.0], [92.5, 425.0], [92.6, 425.0], [92.7, 438.0], [92.8, 438.0], [92.9, 438.0], [93.0, 438.0], [93.1, 438.0], [93.2, 438.0], [93.3, 442.0], [93.4, 442.0], [93.5, 442.0], [93.6, 442.0], [93.7, 442.0], [93.8, 442.0], [93.9, 442.0], [94.0, 450.0], [94.1, 450.0], [94.2, 450.0], [94.3, 450.0], [94.4, 450.0], [94.5, 450.0], [94.6, 450.0], [94.7, 451.0], [94.8, 451.0], [94.9, 451.0], [95.0, 451.0], [95.1, 451.0], [95.2, 451.0], [95.3, 451.0], [95.4, 453.0], [95.5, 453.0], [95.6, 453.0], [95.7, 453.0], [95.8, 453.0], [95.9, 453.0], [96.0, 453.0], [96.1, 453.0], [96.2, 453.0], [96.3, 453.0], [96.4, 453.0], [96.5, 453.0], [96.6, 453.0], [96.7, 455.0], [96.8, 455.0], [96.9, 455.0], [97.0, 455.0], [97.1, 455.0], [97.2, 455.0], [97.3, 455.0], [97.4, 516.0], [97.5, 516.0], [97.6, 516.0], [97.7, 516.0], [97.8, 516.0], [97.9, 516.0], [98.0, 523.0], [98.1, 523.0], [98.2, 523.0], [98.3, 523.0], [98.4, 523.0], [98.5, 523.0], [98.6, 523.0], [98.7, 523.0], [98.8, 523.0], [98.9, 523.0], [99.0, 523.0], [99.1, 523.0], [99.2, 523.0], [99.3, 523.0], [99.4, 523.0], [99.5, 523.0], [99.6, 523.0], [99.7, 523.0], [99.8, 523.0], [99.9, 523.0], [100.0, 523.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 60.0, "series": [{"data": [[0.0, 10.0], [300.0, 57.0], [100.0, 5.0], [200.0, 60.0], [400.0, 13.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 145.0, "series": [{"data": [[0.0, 145.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 4.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.080000000000004, "minX": 1.60505856E12, "maxY": 9.081632653061225, "series": [{"data": [[1.60505856E12, 9.080000000000004], [1.60505862E12, 9.081632653061225]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505862E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 104.83333333333334, "minX": 1.0, "maxY": 321.42857142857133, "series": [{"data": [[4.0, 104.83333333333334], [8.0, 218.33333333333334], [2.0, 302.0], [1.0, 300.0], [9.0, 263.3333333333333], [5.0, 176.0], [10.0, 321.42857142857133], [3.0, 126.6], [6.0, 218.0], [7.0, 204.66666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.080536912751679, 293.9127516778523]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 415.78333333333336, "minX": 1.60505856E12, "maxY": 2960.9333333333334, "series": [{"data": [[1.60505856E12, 2960.9333333333334], [1.60505862E12, 1655.1]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60505856E12, 850.0833333333334], [1.60505862E12, 415.78333333333336]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505862E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 270.02000000000004, "minX": 1.60505856E12, "maxY": 342.673469387755, "series": [{"data": [[1.60505856E12, 270.02000000000004], [1.60505862E12, 342.673469387755]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505862E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 269.86999999999995, "minX": 1.60505856E12, "maxY": 342.5306122448979, "series": [{"data": [[1.60505856E12, 269.86999999999995], [1.60505862E12, 342.5306122448979]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505862E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60505856E12, "maxY": 1.1199999999999994, "series": [{"data": [[1.60505856E12, 1.1199999999999994], [1.60505862E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505862E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12.0, "minX": 1.60505856E12, "maxY": 523.0, "series": [{"data": [[1.60505856E12, 450.0], [1.60505862E12, 523.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60505856E12, 12.0], [1.60505862E12, 201.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60505856E12, 12.0], [1.60505862E12, 201.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60505856E12, 12.0], [1.60505862E12, 201.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60505856E12, 12.0], [1.60505862E12, 201.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60505856E12, 274.5], [1.60505862E12, 338.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505862E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 65.5, "minX": 8.0, "maxY": 351.5, "series": [{"data": [[8.0, 65.5], [32.0, 322.5], [21.0, 334.0], [28.0, 351.5], [30.0, 270.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 65.5, "minX": 8.0, "maxY": 351.5, "series": [{"data": [[8.0, 65.5], [32.0, 322.5], [21.0, 334.0], [28.0, 351.5], [30.0, 270.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 32.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.65, "minX": 1.60505856E12, "maxY": 1.8333333333333333, "series": [{"data": [[1.60505856E12, 1.8333333333333333], [1.60505862E12, 0.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505862E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60505856E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.60505856E12, 1.6666666666666667], [1.60505862E12, 0.8166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60505862E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60505856E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.60505856E12, 1.6666666666666667], [1.60505862E12, 0.8166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505862E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8166666666666667, "minX": 1.60505856E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.60505856E12, 1.6666666666666667], [1.60505862E12, 0.8166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60505862E12, "title": "Total Transactions Per Second"}},
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

