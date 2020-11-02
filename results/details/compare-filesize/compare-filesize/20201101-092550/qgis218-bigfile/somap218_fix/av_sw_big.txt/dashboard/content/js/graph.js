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
        data: {"result": {"minY": 202.0, "minX": 0.0, "maxY": 64065.0, "series": [{"data": [[0.0, 202.0], [0.1, 205.0], [0.2, 206.0], [0.3, 207.0], [0.4, 208.0], [0.5, 209.0], [0.6, 209.0], [0.7, 210.0], [0.8, 210.0], [0.9, 211.0], [1.0, 211.0], [1.1, 211.0], [1.2, 212.0], [1.3, 212.0], [1.4, 212.0], [1.5, 212.0], [1.6, 212.0], [1.7, 213.0], [1.8, 213.0], [1.9, 213.0], [2.0, 213.0], [2.1, 213.0], [2.2, 214.0], [2.3, 214.0], [2.4, 214.0], [2.5, 214.0], [2.6, 214.0], [2.7, 214.0], [2.8, 214.0], [2.9, 215.0], [3.0, 215.0], [3.1, 215.0], [3.2, 215.0], [3.3, 215.0], [3.4, 215.0], [3.5, 215.0], [3.6, 216.0], [3.7, 216.0], [3.8, 216.0], [3.9, 216.0], [4.0, 216.0], [4.1, 216.0], [4.2, 216.0], [4.3, 216.0], [4.4, 216.0], [4.5, 217.0], [4.6, 217.0], [4.7, 217.0], [4.8, 217.0], [4.9, 217.0], [5.0, 217.0], [5.1, 217.0], [5.2, 217.0], [5.3, 217.0], [5.4, 218.0], [5.5, 218.0], [5.6, 218.0], [5.7, 218.0], [5.8, 218.0], [5.9, 218.0], [6.0, 218.0], [6.1, 218.0], [6.2, 218.0], [6.3, 218.0], [6.4, 219.0], [6.5, 219.0], [6.6, 219.0], [6.7, 219.0], [6.8, 219.0], [6.9, 219.0], [7.0, 219.0], [7.1, 219.0], [7.2, 220.0], [7.3, 220.0], [7.4, 220.0], [7.5, 220.0], [7.6, 220.0], [7.7, 220.0], [7.8, 220.0], [7.9, 220.0], [8.0, 220.0], [8.1, 220.0], [8.2, 221.0], [8.3, 221.0], [8.4, 221.0], [8.5, 221.0], [8.6, 221.0], [8.7, 221.0], [8.8, 221.0], [8.9, 221.0], [9.0, 221.0], [9.1, 221.0], [9.2, 221.0], [9.3, 222.0], [9.4, 222.0], [9.5, 222.0], [9.6, 222.0], [9.7, 222.0], [9.8, 222.0], [9.9, 222.0], [10.0, 222.0], [10.1, 222.0], [10.2, 222.0], [10.3, 222.0], [10.4, 222.0], [10.5, 222.0], [10.6, 223.0], [10.7, 223.0], [10.8, 223.0], [10.9, 223.0], [11.0, 223.0], [11.1, 223.0], [11.2, 223.0], [11.3, 223.0], [11.4, 223.0], [11.5, 223.0], [11.6, 223.0], [11.7, 223.0], [11.8, 223.0], [11.9, 224.0], [12.0, 224.0], [12.1, 224.0], [12.2, 224.0], [12.3, 224.0], [12.4, 224.0], [12.5, 224.0], [12.6, 224.0], [12.7, 224.0], [12.8, 224.0], [12.9, 224.0], [13.0, 224.0], [13.1, 224.0], [13.2, 224.0], [13.3, 224.0], [13.4, 224.0], [13.5, 224.0], [13.6, 225.0], [13.7, 225.0], [13.8, 225.0], [13.9, 225.0], [14.0, 225.0], [14.1, 225.0], [14.2, 225.0], [14.3, 225.0], [14.4, 225.0], [14.5, 225.0], [14.6, 225.0], [14.7, 226.0], [14.8, 226.0], [14.9, 226.0], [15.0, 226.0], [15.1, 226.0], [15.2, 226.0], [15.3, 226.0], [15.4, 226.0], [15.5, 226.0], [15.6, 226.0], [15.7, 226.0], [15.8, 226.0], [15.9, 226.0], [16.0, 227.0], [16.1, 227.0], [16.2, 227.0], [16.3, 227.0], [16.4, 227.0], [16.5, 227.0], [16.6, 227.0], [16.7, 227.0], [16.8, 227.0], [16.9, 227.0], [17.0, 227.0], [17.1, 227.0], [17.2, 228.0], [17.3, 228.0], [17.4, 228.0], [17.5, 228.0], [17.6, 228.0], [17.7, 228.0], [17.8, 228.0], [17.9, 228.0], [18.0, 228.0], [18.1, 228.0], [18.2, 228.0], [18.3, 228.0], [18.4, 229.0], [18.5, 229.0], [18.6, 229.0], [18.7, 229.0], [18.8, 229.0], [18.9, 229.0], [19.0, 229.0], [19.1, 229.0], [19.2, 229.0], [19.3, 230.0], [19.4, 230.0], [19.5, 230.0], [19.6, 230.0], [19.7, 230.0], [19.8, 230.0], [19.9, 230.0], [20.0, 230.0], [20.1, 230.0], [20.2, 230.0], [20.3, 231.0], [20.4, 231.0], [20.5, 231.0], [20.6, 231.0], [20.7, 231.0], [20.8, 231.0], [20.9, 232.0], [21.0, 232.0], [21.1, 232.0], [21.2, 232.0], [21.3, 232.0], [21.4, 232.0], [21.5, 232.0], [21.6, 232.0], [21.7, 233.0], [21.8, 233.0], [21.9, 233.0], [22.0, 233.0], [22.1, 233.0], [22.2, 233.0], [22.3, 233.0], [22.4, 233.0], [22.5, 233.0], [22.6, 234.0], [22.7, 234.0], [22.8, 234.0], [22.9, 234.0], [23.0, 234.0], [23.1, 234.0], [23.2, 234.0], [23.3, 234.0], [23.4, 235.0], [23.5, 235.0], [23.6, 235.0], [23.7, 235.0], [23.8, 235.0], [23.9, 235.0], [24.0, 236.0], [24.1, 236.0], [24.2, 236.0], [24.3, 236.0], [24.4, 236.0], [24.5, 236.0], [24.6, 236.0], [24.7, 236.0], [24.8, 236.0], [24.9, 236.0], [25.0, 237.0], [25.1, 237.0], [25.2, 237.0], [25.3, 237.0], [25.4, 237.0], [25.5, 237.0], [25.6, 237.0], [25.7, 237.0], [25.8, 238.0], [25.9, 238.0], [26.0, 238.0], [26.1, 238.0], [26.2, 238.0], [26.3, 238.0], [26.4, 238.0], [26.5, 238.0], [26.6, 239.0], [26.7, 239.0], [26.8, 239.0], [26.9, 239.0], [27.0, 239.0], [27.1, 239.0], [27.2, 240.0], [27.3, 240.0], [27.4, 240.0], [27.5, 240.0], [27.6, 240.0], [27.7, 240.0], [27.8, 240.0], [27.9, 241.0], [28.0, 241.0], [28.1, 241.0], [28.2, 241.0], [28.3, 241.0], [28.4, 241.0], [28.5, 242.0], [28.6, 242.0], [28.7, 242.0], [28.8, 242.0], [28.9, 242.0], [29.0, 243.0], [29.1, 243.0], [29.2, 243.0], [29.3, 243.0], [29.4, 244.0], [29.5, 244.0], [29.6, 244.0], [29.7, 244.0], [29.8, 244.0], [29.9, 245.0], [30.0, 245.0], [30.1, 245.0], [30.2, 245.0], [30.3, 245.0], [30.4, 246.0], [30.5, 246.0], [30.6, 246.0], [30.7, 246.0], [30.8, 247.0], [30.9, 247.0], [31.0, 247.0], [31.1, 247.0], [31.2, 248.0], [31.3, 248.0], [31.4, 248.0], [31.5, 248.0], [31.6, 248.0], [31.7, 248.0], [31.8, 249.0], [31.9, 249.0], [32.0, 249.0], [32.1, 250.0], [32.2, 250.0], [32.3, 250.0], [32.4, 251.0], [32.5, 251.0], [32.6, 251.0], [32.7, 252.0], [32.8, 252.0], [32.9, 252.0], [33.0, 252.0], [33.1, 252.0], [33.2, 253.0], [33.3, 253.0], [33.4, 253.0], [33.5, 253.0], [33.6, 254.0], [33.7, 254.0], [33.8, 254.0], [33.9, 255.0], [34.0, 255.0], [34.1, 255.0], [34.2, 255.0], [34.3, 256.0], [34.4, 256.0], [34.5, 256.0], [34.6, 256.0], [34.7, 256.0], [34.8, 257.0], [34.9, 257.0], [35.0, 257.0], [35.1, 258.0], [35.2, 258.0], [35.3, 258.0], [35.4, 259.0], [35.5, 259.0], [35.6, 260.0], [35.7, 260.0], [35.8, 260.0], [35.9, 260.0], [36.0, 261.0], [36.1, 261.0], [36.2, 261.0], [36.3, 261.0], [36.4, 262.0], [36.5, 262.0], [36.6, 262.0], [36.7, 263.0], [36.8, 263.0], [36.9, 264.0], [37.0, 264.0], [37.1, 264.0], [37.2, 265.0], [37.3, 265.0], [37.4, 265.0], [37.5, 266.0], [37.6, 266.0], [37.7, 266.0], [37.8, 266.0], [37.9, 267.0], [38.0, 267.0], [38.1, 267.0], [38.2, 268.0], [38.3, 268.0], [38.4, 268.0], [38.5, 269.0], [38.6, 269.0], [38.7, 269.0], [38.8, 269.0], [38.9, 270.0], [39.0, 270.0], [39.1, 270.0], [39.2, 271.0], [39.3, 271.0], [39.4, 272.0], [39.5, 272.0], [39.6, 273.0], [39.7, 273.0], [39.8, 273.0], [39.9, 274.0], [40.0, 274.0], [40.1, 275.0], [40.2, 276.0], [40.3, 276.0], [40.4, 276.0], [40.5, 276.0], [40.6, 277.0], [40.7, 278.0], [40.8, 278.0], [40.9, 278.0], [41.0, 278.0], [41.1, 279.0], [41.2, 279.0], [41.3, 280.0], [41.4, 280.0], [41.5, 280.0], [41.6, 281.0], [41.7, 281.0], [41.8, 281.0], [41.9, 281.0], [42.0, 282.0], [42.1, 282.0], [42.2, 283.0], [42.3, 283.0], [42.4, 283.0], [42.5, 283.0], [42.6, 284.0], [42.7, 284.0], [42.8, 285.0], [42.9, 285.0], [43.0, 285.0], [43.1, 285.0], [43.2, 285.0], [43.3, 286.0], [43.4, 286.0], [43.5, 286.0], [43.6, 286.0], [43.7, 287.0], [43.8, 287.0], [43.9, 287.0], [44.0, 288.0], [44.1, 288.0], [44.2, 288.0], [44.3, 288.0], [44.4, 288.0], [44.5, 289.0], [44.6, 289.0], [44.7, 289.0], [44.8, 289.0], [44.9, 290.0], [45.0, 290.0], [45.1, 290.0], [45.2, 290.0], [45.3, 290.0], [45.4, 291.0], [45.5, 291.0], [45.6, 291.0], [45.7, 291.0], [45.8, 291.0], [45.9, 291.0], [46.0, 291.0], [46.1, 292.0], [46.2, 292.0], [46.3, 292.0], [46.4, 293.0], [46.5, 293.0], [46.6, 293.0], [46.7, 293.0], [46.8, 293.0], [46.9, 294.0], [47.0, 294.0], [47.1, 294.0], [47.2, 294.0], [47.3, 294.0], [47.4, 295.0], [47.5, 295.0], [47.6, 295.0], [47.7, 295.0], [47.8, 295.0], [47.9, 296.0], [48.0, 296.0], [48.1, 296.0], [48.2, 296.0], [48.3, 296.0], [48.4, 296.0], [48.5, 297.0], [48.6, 297.0], [48.7, 297.0], [48.8, 297.0], [48.9, 297.0], [49.0, 298.0], [49.1, 298.0], [49.2, 298.0], [49.3, 298.0], [49.4, 298.0], [49.5, 299.0], [49.6, 299.0], [49.7, 299.0], [49.8, 299.0], [49.9, 300.0], [50.0, 300.0], [50.1, 300.0], [50.2, 300.0], [50.3, 300.0], [50.4, 300.0], [50.5, 301.0], [50.6, 301.0], [50.7, 301.0], [50.8, 301.0], [50.9, 302.0], [51.0, 302.0], [51.1, 302.0], [51.2, 302.0], [51.3, 302.0], [51.4, 303.0], [51.5, 303.0], [51.6, 304.0], [51.7, 304.0], [51.8, 304.0], [51.9, 304.0], [52.0, 305.0], [52.1, 305.0], [52.2, 305.0], [52.3, 306.0], [52.4, 306.0], [52.5, 306.0], [52.6, 307.0], [52.7, 307.0], [52.8, 308.0], [52.9, 308.0], [53.0, 308.0], [53.1, 308.0], [53.2, 309.0], [53.3, 309.0], [53.4, 309.0], [53.5, 310.0], [53.6, 310.0], [53.7, 311.0], [53.8, 311.0], [53.9, 311.0], [54.0, 312.0], [54.1, 312.0], [54.2, 312.0], [54.3, 313.0], [54.4, 313.0], [54.5, 314.0], [54.6, 315.0], [54.7, 315.0], [54.8, 315.0], [54.9, 316.0], [55.0, 316.0], [55.1, 316.0], [55.2, 317.0], [55.3, 317.0], [55.4, 318.0], [55.5, 318.0], [55.6, 318.0], [55.7, 319.0], [55.8, 320.0], [55.9, 320.0], [56.0, 320.0], [56.1, 321.0], [56.2, 321.0], [56.3, 322.0], [56.4, 322.0], [56.5, 322.0], [56.6, 323.0], [56.7, 323.0], [56.8, 323.0], [56.9, 324.0], [57.0, 324.0], [57.1, 325.0], [57.2, 325.0], [57.3, 325.0], [57.4, 325.0], [57.5, 325.0], [57.6, 326.0], [57.7, 326.0], [57.8, 327.0], [57.9, 327.0], [58.0, 328.0], [58.1, 328.0], [58.2, 328.0], [58.3, 329.0], [58.4, 329.0], [58.5, 329.0], [58.6, 329.0], [58.7, 330.0], [58.8, 330.0], [58.9, 330.0], [59.0, 330.0], [59.1, 331.0], [59.2, 331.0], [59.3, 331.0], [59.4, 331.0], [59.5, 332.0], [59.6, 332.0], [59.7, 332.0], [59.8, 332.0], [59.9, 332.0], [60.0, 332.0], [60.1, 333.0], [60.2, 333.0], [60.3, 333.0], [60.4, 333.0], [60.5, 334.0], [60.6, 334.0], [60.7, 334.0], [60.8, 335.0], [60.9, 335.0], [61.0, 335.0], [61.1, 336.0], [61.2, 336.0], [61.3, 336.0], [61.4, 337.0], [61.5, 337.0], [61.6, 337.0], [61.7, 337.0], [61.8, 337.0], [61.9, 338.0], [62.0, 338.0], [62.1, 338.0], [62.2, 338.0], [62.3, 339.0], [62.4, 339.0], [62.5, 339.0], [62.6, 340.0], [62.7, 340.0], [62.8, 340.0], [62.9, 341.0], [63.0, 341.0], [63.1, 341.0], [63.2, 342.0], [63.3, 342.0], [63.4, 342.0], [63.5, 343.0], [63.6, 343.0], [63.7, 343.0], [63.8, 344.0], [63.9, 344.0], [64.0, 344.0], [64.1, 345.0], [64.2, 345.0], [64.3, 346.0], [64.4, 346.0], [64.5, 347.0], [64.6, 347.0], [64.7, 347.0], [64.8, 347.0], [64.9, 348.0], [65.0, 348.0], [65.1, 349.0], [65.2, 349.0], [65.3, 350.0], [65.4, 350.0], [65.5, 350.0], [65.6, 351.0], [65.7, 351.0], [65.8, 352.0], [65.9, 352.0], [66.0, 353.0], [66.1, 353.0], [66.2, 353.0], [66.3, 354.0], [66.4, 354.0], [66.5, 355.0], [66.6, 355.0], [66.7, 356.0], [66.8, 356.0], [66.9, 356.0], [67.0, 357.0], [67.1, 358.0], [67.2, 358.0], [67.3, 359.0], [67.4, 359.0], [67.5, 359.0], [67.6, 360.0], [67.7, 361.0], [67.8, 361.0], [67.9, 362.0], [68.0, 362.0], [68.1, 362.0], [68.2, 363.0], [68.3, 363.0], [68.4, 364.0], [68.5, 364.0], [68.6, 365.0], [68.7, 366.0], [68.8, 367.0], [68.9, 367.0], [69.0, 368.0], [69.1, 368.0], [69.2, 369.0], [69.3, 370.0], [69.4, 370.0], [69.5, 371.0], [69.6, 371.0], [69.7, 372.0], [69.8, 373.0], [69.9, 374.0], [70.0, 374.0], [70.1, 375.0], [70.2, 376.0], [70.3, 377.0], [70.4, 378.0], [70.5, 378.0], [70.6, 379.0], [70.7, 380.0], [70.8, 381.0], [70.9, 382.0], [71.0, 383.0], [71.1, 384.0], [71.2, 385.0], [71.3, 387.0], [71.4, 389.0], [71.5, 389.0], [71.6, 390.0], [71.7, 391.0], [71.8, 392.0], [71.9, 392.0], [72.0, 393.0], [72.1, 394.0], [72.2, 395.0], [72.3, 395.0], [72.4, 396.0], [72.5, 397.0], [72.6, 398.0], [72.7, 399.0], [72.8, 399.0], [72.9, 400.0], [73.0, 401.0], [73.1, 401.0], [73.2, 402.0], [73.3, 403.0], [73.4, 403.0], [73.5, 404.0], [73.6, 405.0], [73.7, 405.0], [73.8, 406.0], [73.9, 407.0], [74.0, 407.0], [74.1, 408.0], [74.2, 409.0], [74.3, 409.0], [74.4, 410.0], [74.5, 411.0], [74.6, 411.0], [74.7, 412.0], [74.8, 412.0], [74.9, 413.0], [75.0, 414.0], [75.1, 414.0], [75.2, 415.0], [75.3, 415.0], [75.4, 416.0], [75.5, 416.0], [75.6, 416.0], [75.7, 417.0], [75.8, 417.0], [75.9, 417.0], [76.0, 417.0], [76.1, 418.0], [76.2, 419.0], [76.3, 419.0], [76.4, 420.0], [76.5, 420.0], [76.6, 421.0], [76.7, 421.0], [76.8, 421.0], [76.9, 422.0], [77.0, 422.0], [77.1, 423.0], [77.2, 423.0], [77.3, 423.0], [77.4, 424.0], [77.5, 424.0], [77.6, 425.0], [77.7, 425.0], [77.8, 426.0], [77.9, 426.0], [78.0, 426.0], [78.1, 427.0], [78.2, 427.0], [78.3, 427.0], [78.4, 428.0], [78.5, 428.0], [78.6, 428.0], [78.7, 429.0], [78.8, 429.0], [78.9, 429.0], [79.0, 429.0], [79.1, 430.0], [79.2, 430.0], [79.3, 430.0], [79.4, 431.0], [79.5, 431.0], [79.6, 431.0], [79.7, 432.0], [79.8, 433.0], [79.9, 433.0], [80.0, 433.0], [80.1, 434.0], [80.2, 434.0], [80.3, 435.0], [80.4, 435.0], [80.5, 436.0], [80.6, 436.0], [80.7, 436.0], [80.8, 437.0], [80.9, 437.0], [81.0, 438.0], [81.1, 438.0], [81.2, 439.0], [81.3, 439.0], [81.4, 440.0], [81.5, 440.0], [81.6, 441.0], [81.7, 441.0], [81.8, 442.0], [81.9, 442.0], [82.0, 443.0], [82.1, 443.0], [82.2, 444.0], [82.3, 444.0], [82.4, 445.0], [82.5, 445.0], [82.6, 446.0], [82.7, 446.0], [82.8, 446.0], [82.9, 447.0], [83.0, 447.0], [83.1, 448.0], [83.2, 448.0], [83.3, 449.0], [83.4, 450.0], [83.5, 450.0], [83.6, 451.0], [83.7, 452.0], [83.8, 452.0], [83.9, 453.0], [84.0, 453.0], [84.1, 453.0], [84.2, 454.0], [84.3, 454.0], [84.4, 455.0], [84.5, 455.0], [84.6, 456.0], [84.7, 457.0], [84.8, 457.0], [84.9, 458.0], [85.0, 459.0], [85.1, 460.0], [85.2, 460.0], [85.3, 462.0], [85.4, 463.0], [85.5, 464.0], [85.6, 465.0], [85.7, 466.0], [85.8, 467.0], [85.9, 469.0], [86.0, 469.0], [86.1, 470.0], [86.2, 471.0], [86.3, 472.0], [86.4, 473.0], [86.5, 474.0], [86.6, 476.0], [86.7, 477.0], [86.8, 478.0], [86.9, 479.0], [87.0, 480.0], [87.1, 481.0], [87.2, 482.0], [87.3, 483.0], [87.4, 484.0], [87.5, 485.0], [87.6, 488.0], [87.7, 489.0], [87.8, 490.0], [87.9, 490.0], [88.0, 492.0], [88.1, 493.0], [88.2, 494.0], [88.3, 495.0], [88.4, 496.0], [88.5, 498.0], [88.6, 499.0], [88.7, 500.0], [88.8, 501.0], [88.9, 502.0], [89.0, 504.0], [89.1, 505.0], [89.2, 506.0], [89.3, 506.0], [89.4, 509.0], [89.5, 513.0], [89.6, 514.0], [89.7, 517.0], [89.8, 519.0], [89.9, 521.0], [90.0, 522.0], [90.1, 524.0], [90.2, 525.0], [90.3, 527.0], [90.4, 530.0], [90.5, 531.0], [90.6, 532.0], [90.7, 533.0], [90.8, 535.0], [90.9, 536.0], [91.0, 539.0], [91.1, 541.0], [91.2, 543.0], [91.3, 545.0], [91.4, 547.0], [91.5, 548.0], [91.6, 552.0], [91.7, 554.0], [91.8, 558.0], [91.9, 561.0], [92.0, 562.0], [92.1, 568.0], [92.2, 572.0], [92.3, 574.0], [92.4, 578.0], [92.5, 581.0], [92.6, 584.0], [92.7, 588.0], [92.8, 595.0], [92.9, 597.0], [93.0, 601.0], [93.1, 605.0], [93.2, 610.0], [93.3, 614.0], [93.4, 620.0], [93.5, 627.0], [93.6, 629.0], [93.7, 631.0], [93.8, 637.0], [93.9, 640.0], [94.0, 643.0], [94.1, 645.0], [94.2, 647.0], [94.3, 650.0], [94.4, 651.0], [94.5, 652.0], [94.6, 654.0], [94.7, 658.0], [94.8, 661.0], [94.9, 663.0], [95.0, 669.0], [95.1, 671.0], [95.2, 672.0], [95.3, 678.0], [95.4, 684.0], [95.5, 687.0], [95.6, 690.0], [95.7, 694.0], [95.8, 698.0], [95.9, 704.0], [96.0, 707.0], [96.1, 711.0], [96.2, 717.0], [96.3, 720.0], [96.4, 723.0], [96.5, 725.0], [96.6, 732.0], [96.7, 736.0], [96.8, 740.0], [96.9, 741.0], [97.0, 744.0], [97.1, 746.0], [97.2, 750.0], [97.3, 753.0], [97.4, 759.0], [97.5, 762.0], [97.6, 767.0], [97.7, 773.0], [97.8, 784.0], [97.9, 795.0], [98.0, 811.0], [98.1, 823.0], [98.2, 825.0], [98.3, 832.0], [98.4, 841.0], [98.5, 850.0], [98.6, 857.0], [98.7, 861.0], [98.8, 868.0], [98.9, 889.0], [99.0, 928.0], [99.1, 942.0], [99.2, 966.0], [99.3, 996.0], [99.4, 1007.0], [99.5, 1018.0], [99.6, 1092.0], [99.7, 2228.0], [99.8, 24391.0], [99.9, 28532.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 2586.0, "series": [{"data": [[33500.0, 1.0], [2200.0, 1.0], [600.0, 149.0], [40300.0, 1.0], [700.0, 109.0], [45300.0, 1.0], [200.0, 2586.0], [800.0, 51.0], [51300.0, 1.0], [900.0, 22.0], [1000.0, 15.0], [64000.0, 1.0], [1100.0, 3.0], [4400.0, 2.0], [300.0, 1193.0], [22400.0, 1.0], [23500.0, 1.0], [24300.0, 1.0], [400.0, 821.0], [26400.0, 1.0], [26300.0, 1.0], [27300.0, 2.0], [28500.0, 1.0], [500.0, 225.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 64000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4605.0, "series": [{"data": [[0.0, 4605.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 569.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.95, "minX": 1.60422288E12, "maxY": 10.0, "series": [{"data": [[1.60422294E12, 10.0], [1.60422288E12, 10.0], [1.60422306E12, 10.0], [1.604223E12, 10.0], [1.60422312E12, 9.95]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422312E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 297.0, "minX": 1.0, "maxY": 51302.0, "series": [{"data": [[8.0, 371.5], [4.0, 631.0], [2.0, 51302.0], [1.0, 33507.0], [9.0, 303.0], [10.0, 414.4402624975882], [5.0, 325.0], [6.0, 472.0], [3.0, 297.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991522157996146, 430.59633911368104]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 777.8833333333333, "minX": 1.60422288E12, "maxY": 287008.9, "series": [{"data": [[1.60422294E12, 287008.9], [1.60422288E12, 13521.883333333333], [1.60422306E12, 270940.5333333333], [1.604223E12, 256665.23333333334], [1.60422312E12, 173987.51666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422294E12, 10099.533333333333], [1.60422288E12, 777.8833333333333], [1.60422306E12, 10033.483333333334], [1.604223E12, 10211.65], [1.60422312E12, 6503.283333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422312E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 398.7698300283284, "minX": 1.60422288E12, "maxY": 467.4659090909095, "series": [{"data": [[1.60422294E12, 398.7698300283284], [1.60422288E12, 451.49056603773585], [1.60422306E12, 426.69942611190817], [1.604223E12, 441.8347639484982], [1.60422312E12, 467.4659090909095]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422312E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 398.71246458923554, "minX": 1.60422288E12, "maxY": 467.41818181818184, "series": [{"data": [[1.60422294E12, 398.71246458923554], [1.60422288E12, 451.38679245283026], [1.60422306E12, 426.65423242467693], [1.604223E12, 441.7911301859807], [1.60422312E12, 467.41818181818184]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422312E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0056657223796034075, "minX": 1.60422288E12, "maxY": 0.8018867924528297, "series": [{"data": [[1.60422294E12, 0.0056657223796034075], [1.60422288E12, 0.8018867924528297], [1.60422306E12, 0.006456241032998557], [1.604223E12, 0.006437768240343352], [1.60422312E12, 0.009090909090909097]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422312E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 202.0, "minX": 1.60422288E12, "maxY": 51302.0, "series": [{"data": [[1.60422294E12, 28532.0], [1.60422288E12, 1160.0], [1.60422306E12, 45393.0], [1.604223E12, 24391.0], [1.60422312E12, 51302.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422294E12, 207.0], [1.60422288E12, 221.0], [1.60422306E12, 214.0], [1.604223E12, 211.0], [1.60422312E12, 219.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422294E12, 207.0], [1.60422288E12, 221.4151000714302], [1.60422306E12, 214.0], [1.604223E12, 211.0], [1.60422312E12, 219.7219000840187]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422294E12, 207.0], [1.60422288E12, 221.11549991071223], [1.60422306E12, 214.0], [1.604223E12, 211.0], [1.60422312E12, 219.36949989497663]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422294E12, 202.0], [1.60422288E12, 221.0], [1.60422306E12, 208.0], [1.604223E12, 208.0], [1.60422312E12, 216.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422294E12, 302.0], [1.60422288E12, 390.0], [1.60422306E12, 298.5], [1.604223E12, 298.0], [1.60422312E12, 294.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422312E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 227.0, "minX": 7.0, "maxY": 64065.0, "series": [{"data": [[32.0, 227.0], [34.0, 228.0], [17.0, 364.0], [18.0, 364.5], [19.0, 392.0], [20.0, 362.0], [21.0, 343.5], [22.0, 331.5], [23.0, 302.0], [24.0, 297.0], [25.0, 253.5], [26.0, 254.0], [27.0, 245.5], [7.0, 1014.0], [28.0, 241.0], [29.0, 235.0], [30.0, 241.0], [31.0, 227.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[23.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 227.0, "minX": 7.0, "maxY": 64065.0, "series": [{"data": [[32.0, 227.0], [34.0, 228.0], [17.0, 364.0], [18.0, 364.5], [19.0, 391.0], [20.0, 362.0], [21.0, 343.5], [22.0, 331.0], [23.0, 302.0], [24.0, 297.0], [25.0, 253.5], [26.0, 254.0], [27.0, 245.5], [7.0, 1014.0], [28.0, 240.5], [29.0, 235.0], [30.0, 241.0], [31.0, 227.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[23.0, 64065.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.9333333333333333, "minX": 1.60422288E12, "maxY": 23.533333333333335, "series": [{"data": [[1.60422294E12, 23.533333333333335], [1.60422288E12, 1.9333333333333333], [1.60422306E12, 23.233333333333334], [1.604223E12, 23.3], [1.60422312E12, 14.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422312E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60422288E12, "maxY": 23.533333333333335, "series": [{"data": [[1.60422294E12, 23.533333333333335], [1.60422288E12, 1.7666666666666666], [1.60422306E12, 23.233333333333334], [1.604223E12, 23.283333333333335], [1.60422312E12, 14.666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.604223E12, 0.016666666666666666]], "isOverall": false, "label": "503", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422312E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60422288E12, "maxY": 23.533333333333335, "series": [{"data": [[1.60422294E12, 23.533333333333335], [1.60422288E12, 1.7666666666666666], [1.60422306E12, 23.233333333333334], [1.604223E12, 23.283333333333335], [1.60422312E12, 14.666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.604223E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422312E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60422288E12, "maxY": 23.533333333333335, "series": [{"data": [[1.60422294E12, 23.533333333333335], [1.60422288E12, 1.7666666666666666], [1.60422306E12, 23.233333333333334], [1.604223E12, 23.283333333333335], [1.60422312E12, 14.666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.604223E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422312E12, "title": "Total Transactions Per Second"}},
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

