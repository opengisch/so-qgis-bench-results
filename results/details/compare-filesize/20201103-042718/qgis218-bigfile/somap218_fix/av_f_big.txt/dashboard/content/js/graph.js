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
        data: {"result": {"minY": 186.0, "minX": 0.0, "maxY": 1410.0, "series": [{"data": [[0.0, 186.0], [0.1, 186.0], [0.2, 187.0], [0.3, 188.0], [0.4, 188.0], [0.5, 188.0], [0.6, 189.0], [0.7, 189.0], [0.8, 189.0], [0.9, 191.0], [1.0, 191.0], [1.1, 192.0], [1.2, 192.0], [1.3, 193.0], [1.4, 193.0], [1.5, 195.0], [1.6, 195.0], [1.7, 195.0], [1.8, 195.0], [1.9, 195.0], [2.0, 195.0], [2.1, 195.0], [2.2, 195.0], [2.3, 195.0], [2.4, 195.0], [2.5, 196.0], [2.6, 197.0], [2.7, 197.0], [2.8, 197.0], [2.9, 198.0], [3.0, 198.0], [3.1, 198.0], [3.2, 198.0], [3.3, 198.0], [3.4, 198.0], [3.5, 200.0], [3.6, 200.0], [3.7, 200.0], [3.8, 200.0], [3.9, 201.0], [4.0, 201.0], [4.1, 201.0], [4.2, 201.0], [4.3, 202.0], [4.4, 202.0], [4.5, 202.0], [4.6, 202.0], [4.7, 202.0], [4.8, 202.0], [4.9, 203.0], [5.0, 203.0], [5.1, 203.0], [5.2, 204.0], [5.3, 204.0], [5.4, 204.0], [5.5, 204.0], [5.6, 204.0], [5.7, 204.0], [5.8, 204.0], [5.9, 205.0], [6.0, 205.0], [6.1, 205.0], [6.2, 206.0], [6.3, 206.0], [6.4, 207.0], [6.5, 207.0], [6.6, 208.0], [6.7, 208.0], [6.8, 208.0], [6.9, 208.0], [7.0, 209.0], [7.1, 209.0], [7.2, 209.0], [7.3, 209.0], [7.4, 209.0], [7.5, 210.0], [7.6, 210.0], [7.7, 211.0], [7.8, 212.0], [7.9, 212.0], [8.0, 212.0], [8.1, 212.0], [8.2, 213.0], [8.3, 213.0], [8.4, 213.0], [8.5, 213.0], [8.6, 214.0], [8.7, 214.0], [8.8, 214.0], [8.9, 214.0], [9.0, 214.0], [9.1, 214.0], [9.2, 215.0], [9.3, 215.0], [9.4, 215.0], [9.5, 215.0], [9.6, 215.0], [9.7, 216.0], [9.8, 216.0], [9.9, 216.0], [10.0, 217.0], [10.1, 217.0], [10.2, 217.0], [10.3, 217.0], [10.4, 217.0], [10.5, 217.0], [10.6, 217.0], [10.7, 217.0], [10.8, 217.0], [10.9, 218.0], [11.0, 218.0], [11.1, 218.0], [11.2, 218.0], [11.3, 218.0], [11.4, 218.0], [11.5, 218.0], [11.6, 218.0], [11.7, 218.0], [11.8, 219.0], [11.9, 219.0], [12.0, 219.0], [12.1, 219.0], [12.2, 219.0], [12.3, 219.0], [12.4, 219.0], [12.5, 219.0], [12.6, 219.0], [12.7, 219.0], [12.8, 219.0], [12.9, 219.0], [13.0, 220.0], [13.1, 220.0], [13.2, 220.0], [13.3, 220.0], [13.4, 220.0], [13.5, 220.0], [13.6, 220.0], [13.7, 220.0], [13.8, 221.0], [13.9, 221.0], [14.0, 221.0], [14.1, 221.0], [14.2, 221.0], [14.3, 221.0], [14.4, 221.0], [14.5, 221.0], [14.6, 221.0], [14.7, 221.0], [14.8, 221.0], [14.9, 221.0], [15.0, 222.0], [15.1, 222.0], [15.2, 222.0], [15.3, 222.0], [15.4, 222.0], [15.5, 222.0], [15.6, 222.0], [15.7, 222.0], [15.8, 222.0], [15.9, 222.0], [16.0, 222.0], [16.1, 222.0], [16.2, 222.0], [16.3, 222.0], [16.4, 223.0], [16.5, 223.0], [16.6, 223.0], [16.7, 223.0], [16.8, 223.0], [16.9, 224.0], [17.0, 224.0], [17.1, 224.0], [17.2, 224.0], [17.3, 224.0], [17.4, 224.0], [17.5, 224.0], [17.6, 224.0], [17.7, 224.0], [17.8, 224.0], [17.9, 224.0], [18.0, 224.0], [18.1, 225.0], [18.2, 225.0], [18.3, 225.0], [18.4, 225.0], [18.5, 225.0], [18.6, 225.0], [18.7, 225.0], [18.8, 225.0], [18.9, 225.0], [19.0, 226.0], [19.1, 226.0], [19.2, 226.0], [19.3, 226.0], [19.4, 226.0], [19.5, 226.0], [19.6, 226.0], [19.7, 226.0], [19.8, 227.0], [19.9, 227.0], [20.0, 227.0], [20.1, 227.0], [20.2, 227.0], [20.3, 227.0], [20.4, 227.0], [20.5, 228.0], [20.6, 228.0], [20.7, 228.0], [20.8, 228.0], [20.9, 228.0], [21.0, 228.0], [21.1, 228.0], [21.2, 228.0], [21.3, 228.0], [21.4, 229.0], [21.5, 229.0], [21.6, 229.0], [21.7, 229.0], [21.8, 229.0], [21.9, 229.0], [22.0, 230.0], [22.1, 230.0], [22.2, 230.0], [22.3, 230.0], [22.4, 231.0], [22.5, 231.0], [22.6, 231.0], [22.7, 231.0], [22.8, 231.0], [22.9, 231.0], [23.0, 231.0], [23.1, 231.0], [23.2, 231.0], [23.3, 231.0], [23.4, 231.0], [23.5, 232.0], [23.6, 232.0], [23.7, 232.0], [23.8, 232.0], [23.9, 232.0], [24.0, 232.0], [24.1, 233.0], [24.2, 233.0], [24.3, 233.0], [24.4, 233.0], [24.5, 233.0], [24.6, 233.0], [24.7, 234.0], [24.8, 234.0], [24.9, 234.0], [25.0, 234.0], [25.1, 234.0], [25.2, 234.0], [25.3, 234.0], [25.4, 234.0], [25.5, 234.0], [25.6, 235.0], [25.7, 235.0], [25.8, 235.0], [25.9, 235.0], [26.0, 235.0], [26.1, 235.0], [26.2, 235.0], [26.3, 235.0], [26.4, 236.0], [26.5, 236.0], [26.6, 236.0], [26.7, 237.0], [26.8, 237.0], [26.9, 237.0], [27.0, 237.0], [27.1, 237.0], [27.2, 237.0], [27.3, 237.0], [27.4, 237.0], [27.5, 237.0], [27.6, 237.0], [27.7, 237.0], [27.8, 238.0], [27.9, 238.0], [28.0, 238.0], [28.1, 238.0], [28.2, 239.0], [28.3, 239.0], [28.4, 239.0], [28.5, 239.0], [28.6, 239.0], [28.7, 239.0], [28.8, 240.0], [28.9, 240.0], [29.0, 241.0], [29.1, 241.0], [29.2, 241.0], [29.3, 242.0], [29.4, 242.0], [29.5, 242.0], [29.6, 243.0], [29.7, 244.0], [29.8, 244.0], [29.9, 244.0], [30.0, 244.0], [30.1, 244.0], [30.2, 244.0], [30.3, 245.0], [30.4, 245.0], [30.5, 246.0], [30.6, 246.0], [30.7, 246.0], [30.8, 246.0], [30.9, 246.0], [31.0, 246.0], [31.1, 246.0], [31.2, 248.0], [31.3, 248.0], [31.4, 248.0], [31.5, 249.0], [31.6, 249.0], [31.7, 249.0], [31.8, 249.0], [31.9, 250.0], [32.0, 250.0], [32.1, 250.0], [32.2, 250.0], [32.3, 250.0], [32.4, 250.0], [32.5, 250.0], [32.6, 252.0], [32.7, 252.0], [32.8, 252.0], [32.9, 252.0], [33.0, 252.0], [33.1, 252.0], [33.2, 252.0], [33.3, 252.0], [33.4, 252.0], [33.5, 252.0], [33.6, 252.0], [33.7, 252.0], [33.8, 253.0], [33.9, 253.0], [34.0, 253.0], [34.1, 253.0], [34.2, 253.0], [34.3, 253.0], [34.4, 253.0], [34.5, 254.0], [34.6, 255.0], [34.7, 255.0], [34.8, 255.0], [34.9, 256.0], [35.0, 256.0], [35.1, 256.0], [35.2, 257.0], [35.3, 257.0], [35.4, 257.0], [35.5, 257.0], [35.6, 257.0], [35.7, 258.0], [35.8, 258.0], [35.9, 258.0], [36.0, 258.0], [36.1, 258.0], [36.2, 258.0], [36.3, 258.0], [36.4, 260.0], [36.5, 260.0], [36.6, 260.0], [36.7, 260.0], [36.8, 261.0], [36.9, 261.0], [37.0, 261.0], [37.1, 261.0], [37.2, 264.0], [37.3, 264.0], [37.4, 264.0], [37.5, 264.0], [37.6, 264.0], [37.7, 264.0], [37.8, 264.0], [37.9, 264.0], [38.0, 265.0], [38.1, 265.0], [38.2, 265.0], [38.3, 265.0], [38.4, 266.0], [38.5, 266.0], [38.6, 266.0], [38.7, 267.0], [38.8, 267.0], [38.9, 267.0], [39.0, 267.0], [39.1, 267.0], [39.2, 267.0], [39.3, 267.0], [39.4, 268.0], [39.5, 268.0], [39.6, 268.0], [39.7, 268.0], [39.8, 268.0], [39.9, 269.0], [40.0, 269.0], [40.1, 269.0], [40.2, 269.0], [40.3, 270.0], [40.4, 270.0], [40.5, 271.0], [40.6, 272.0], [40.7, 272.0], [40.8, 272.0], [40.9, 273.0], [41.0, 274.0], [41.1, 274.0], [41.2, 274.0], [41.3, 274.0], [41.4, 274.0], [41.5, 274.0], [41.6, 274.0], [41.7, 275.0], [41.8, 275.0], [41.9, 275.0], [42.0, 275.0], [42.1, 275.0], [42.2, 276.0], [42.3, 276.0], [42.4, 276.0], [42.5, 276.0], [42.6, 277.0], [42.7, 277.0], [42.8, 277.0], [42.9, 278.0], [43.0, 278.0], [43.1, 278.0], [43.2, 278.0], [43.3, 278.0], [43.4, 278.0], [43.5, 278.0], [43.6, 279.0], [43.7, 279.0], [43.8, 279.0], [43.9, 279.0], [44.0, 280.0], [44.1, 280.0], [44.2, 280.0], [44.3, 281.0], [44.4, 282.0], [44.5, 283.0], [44.6, 283.0], [44.7, 284.0], [44.8, 284.0], [44.9, 287.0], [45.0, 287.0], [45.1, 287.0], [45.2, 287.0], [45.3, 287.0], [45.4, 288.0], [45.5, 288.0], [45.6, 288.0], [45.7, 288.0], [45.8, 289.0], [45.9, 289.0], [46.0, 289.0], [46.1, 289.0], [46.2, 290.0], [46.3, 290.0], [46.4, 291.0], [46.5, 291.0], [46.6, 291.0], [46.7, 292.0], [46.8, 292.0], [46.9, 293.0], [47.0, 293.0], [47.1, 294.0], [47.2, 294.0], [47.3, 295.0], [47.4, 295.0], [47.5, 296.0], [47.6, 296.0], [47.7, 296.0], [47.8, 297.0], [47.9, 297.0], [48.0, 297.0], [48.1, 297.0], [48.2, 298.0], [48.3, 299.0], [48.4, 299.0], [48.5, 299.0], [48.6, 299.0], [48.7, 299.0], [48.8, 300.0], [48.9, 300.0], [49.0, 300.0], [49.1, 300.0], [49.2, 300.0], [49.3, 300.0], [49.4, 302.0], [49.5, 302.0], [49.6, 302.0], [49.7, 302.0], [49.8, 303.0], [49.9, 303.0], [50.0, 303.0], [50.1, 303.0], [50.2, 303.0], [50.3, 303.0], [50.4, 303.0], [50.5, 304.0], [50.6, 304.0], [50.7, 304.0], [50.8, 304.0], [50.9, 304.0], [51.0, 304.0], [51.1, 305.0], [51.2, 305.0], [51.3, 306.0], [51.4, 306.0], [51.5, 307.0], [51.6, 307.0], [51.7, 307.0], [51.8, 307.0], [51.9, 308.0], [52.0, 308.0], [52.1, 308.0], [52.2, 308.0], [52.3, 308.0], [52.4, 309.0], [52.5, 309.0], [52.6, 310.0], [52.7, 310.0], [52.8, 310.0], [52.9, 310.0], [53.0, 311.0], [53.1, 311.0], [53.2, 312.0], [53.3, 312.0], [53.4, 312.0], [53.5, 312.0], [53.6, 312.0], [53.7, 312.0], [53.8, 313.0], [53.9, 314.0], [54.0, 314.0], [54.1, 315.0], [54.2, 315.0], [54.3, 315.0], [54.4, 315.0], [54.5, 315.0], [54.6, 316.0], [54.7, 317.0], [54.8, 317.0], [54.9, 317.0], [55.0, 317.0], [55.1, 317.0], [55.2, 318.0], [55.3, 318.0], [55.4, 318.0], [55.5, 318.0], [55.6, 318.0], [55.7, 319.0], [55.8, 323.0], [55.9, 323.0], [56.0, 323.0], [56.1, 324.0], [56.2, 325.0], [56.3, 325.0], [56.4, 326.0], [56.5, 327.0], [56.6, 327.0], [56.7, 327.0], [56.8, 327.0], [56.9, 328.0], [57.0, 328.0], [57.1, 329.0], [57.2, 329.0], [57.3, 330.0], [57.4, 330.0], [57.5, 331.0], [57.6, 331.0], [57.7, 333.0], [57.8, 333.0], [57.9, 333.0], [58.0, 335.0], [58.1, 336.0], [58.2, 336.0], [58.3, 339.0], [58.4, 339.0], [58.5, 339.0], [58.6, 340.0], [58.7, 341.0], [58.8, 341.0], [58.9, 341.0], [59.0, 343.0], [59.1, 344.0], [59.2, 344.0], [59.3, 344.0], [59.4, 345.0], [59.5, 345.0], [59.6, 345.0], [59.7, 345.0], [59.8, 347.0], [59.9, 349.0], [60.0, 350.0], [60.1, 350.0], [60.2, 351.0], [60.3, 351.0], [60.4, 351.0], [60.5, 351.0], [60.6, 352.0], [60.7, 352.0], [60.8, 352.0], [60.9, 355.0], [61.0, 355.0], [61.1, 356.0], [61.2, 356.0], [61.3, 356.0], [61.4, 356.0], [61.5, 357.0], [61.6, 357.0], [61.7, 358.0], [61.8, 358.0], [61.9, 358.0], [62.0, 358.0], [62.1, 358.0], [62.2, 359.0], [62.3, 359.0], [62.4, 360.0], [62.5, 361.0], [62.6, 361.0], [62.7, 361.0], [62.8, 363.0], [62.9, 363.0], [63.0, 364.0], [63.1, 364.0], [63.2, 366.0], [63.3, 367.0], [63.4, 367.0], [63.5, 367.0], [63.6, 367.0], [63.7, 368.0], [63.8, 368.0], [63.9, 369.0], [64.0, 371.0], [64.1, 371.0], [64.2, 371.0], [64.3, 371.0], [64.4, 373.0], [64.5, 375.0], [64.6, 375.0], [64.7, 375.0], [64.8, 376.0], [64.9, 376.0], [65.0, 376.0], [65.1, 377.0], [65.2, 379.0], [65.3, 379.0], [65.4, 379.0], [65.5, 380.0], [65.6, 381.0], [65.7, 381.0], [65.8, 381.0], [65.9, 381.0], [66.0, 384.0], [66.1, 384.0], [66.2, 384.0], [66.3, 384.0], [66.4, 386.0], [66.5, 386.0], [66.6, 388.0], [66.7, 388.0], [66.8, 388.0], [66.9, 389.0], [67.0, 389.0], [67.1, 390.0], [67.2, 390.0], [67.3, 391.0], [67.4, 394.0], [67.5, 395.0], [67.6, 395.0], [67.7, 397.0], [67.8, 400.0], [67.9, 401.0], [68.0, 401.0], [68.1, 403.0], [68.2, 403.0], [68.3, 404.0], [68.4, 404.0], [68.5, 405.0], [68.6, 407.0], [68.7, 407.0], [68.8, 408.0], [68.9, 408.0], [69.0, 409.0], [69.1, 409.0], [69.2, 412.0], [69.3, 413.0], [69.4, 417.0], [69.5, 417.0], [69.6, 419.0], [69.7, 419.0], [69.8, 420.0], [69.9, 420.0], [70.0, 421.0], [70.1, 424.0], [70.2, 424.0], [70.3, 425.0], [70.4, 425.0], [70.5, 426.0], [70.6, 426.0], [70.7, 426.0], [70.8, 428.0], [70.9, 428.0], [71.0, 428.0], [71.1, 429.0], [71.2, 430.0], [71.3, 430.0], [71.4, 430.0], [71.5, 431.0], [71.6, 433.0], [71.7, 433.0], [71.8, 434.0], [71.9, 435.0], [72.0, 437.0], [72.1, 437.0], [72.2, 439.0], [72.3, 440.0], [72.4, 440.0], [72.5, 440.0], [72.6, 444.0], [72.7, 447.0], [72.8, 448.0], [72.9, 448.0], [73.0, 449.0], [73.1, 450.0], [73.2, 451.0], [73.3, 451.0], [73.4, 452.0], [73.5, 456.0], [73.6, 456.0], [73.7, 458.0], [73.8, 460.0], [73.9, 463.0], [74.0, 463.0], [74.1, 473.0], [74.2, 473.0], [74.3, 479.0], [74.4, 479.0], [74.5, 480.0], [74.6, 484.0], [74.7, 488.0], [74.8, 488.0], [74.9, 492.0], [75.0, 497.0], [75.1, 497.0], [75.2, 502.0], [75.3, 509.0], [75.4, 515.0], [75.5, 515.0], [75.6, 517.0], [75.7, 531.0], [75.8, 531.0], [75.9, 531.0], [76.0, 536.0], [76.1, 548.0], [76.2, 549.0], [76.3, 549.0], [76.4, 551.0], [76.5, 564.0], [76.6, 570.0], [76.7, 570.0], [76.8, 574.0], [76.9, 580.0], [77.0, 580.0], [77.1, 582.0], [77.2, 589.0], [77.3, 591.0], [77.4, 591.0], [77.5, 598.0], [77.6, 599.0], [77.7, 600.0], [77.8, 600.0], [77.9, 601.0], [78.0, 601.0], [78.1, 602.0], [78.2, 602.0], [78.3, 602.0], [78.4, 603.0], [78.5, 603.0], [78.6, 603.0], [78.7, 606.0], [78.8, 607.0], [78.9, 607.0], [79.0, 609.0], [79.1, 611.0], [79.2, 612.0], [79.3, 612.0], [79.4, 612.0], [79.5, 613.0], [79.6, 614.0], [79.7, 614.0], [79.8, 615.0], [79.9, 617.0], [80.0, 617.0], [80.1, 617.0], [80.2, 617.0], [80.3, 617.0], [80.4, 617.0], [80.5, 619.0], [80.6, 619.0], [80.7, 619.0], [80.8, 619.0], [80.9, 620.0], [81.0, 621.0], [81.1, 622.0], [81.2, 622.0], [81.3, 628.0], [81.4, 628.0], [81.5, 628.0], [81.6, 628.0], [81.7, 629.0], [81.8, 629.0], [81.9, 629.0], [82.0, 631.0], [82.1, 632.0], [82.2, 638.0], [82.3, 638.0], [82.4, 638.0], [82.5, 638.0], [82.6, 641.0], [82.7, 641.0], [82.8, 645.0], [82.9, 648.0], [83.0, 649.0], [83.1, 649.0], [83.2, 651.0], [83.3, 665.0], [83.4, 665.0], [83.5, 674.0], [83.6, 675.0], [83.7, 677.0], [83.8, 677.0], [83.9, 680.0], [84.0, 681.0], [84.1, 682.0], [84.2, 682.0], [84.3, 686.0], [84.4, 686.0], [84.5, 692.0], [84.6, 692.0], [84.7, 694.0], [84.8, 703.0], [84.9, 704.0], [85.0, 704.0], [85.1, 708.0], [85.2, 711.0], [85.3, 711.0], [85.4, 712.0], [85.5, 714.0], [85.6, 714.0], [85.7, 714.0], [85.8, 716.0], [85.9, 717.0], [86.0, 720.0], [86.1, 720.0], [86.2, 720.0], [86.3, 721.0], [86.4, 722.0], [86.5, 722.0], [86.6, 722.0], [86.7, 724.0], [86.8, 724.0], [86.9, 724.0], [87.0, 727.0], [87.1, 727.0], [87.2, 727.0], [87.3, 731.0], [87.4, 738.0], [87.5, 741.0], [87.6, 741.0], [87.7, 743.0], [87.8, 747.0], [87.9, 749.0], [88.0, 749.0], [88.1, 749.0], [88.2, 750.0], [88.3, 750.0], [88.4, 750.0], [88.5, 751.0], [88.6, 752.0], [88.7, 752.0], [88.8, 754.0], [88.9, 756.0], [89.0, 763.0], [89.1, 763.0], [89.2, 766.0], [89.3, 771.0], [89.4, 775.0], [89.5, 775.0], [89.6, 776.0], [89.7, 778.0], [89.8, 784.0], [89.9, 784.0], [90.0, 784.0], [90.1, 786.0], [90.2, 786.0], [90.3, 790.0], [90.4, 793.0], [90.5, 793.0], [90.6, 793.0], [90.7, 794.0], [90.8, 796.0], [90.9, 797.0], [91.0, 797.0], [91.1, 799.0], [91.2, 803.0], [91.3, 807.0], [91.4, 807.0], [91.5, 809.0], [91.6, 811.0], [91.7, 811.0], [91.8, 820.0], [91.9, 821.0], [92.0, 822.0], [92.1, 822.0], [92.2, 822.0], [92.3, 823.0], [92.4, 827.0], [92.5, 827.0], [92.6, 828.0], [92.7, 831.0], [92.8, 837.0], [92.9, 837.0], [93.0, 840.0], [93.1, 842.0], [93.2, 851.0], [93.3, 851.0], [93.4, 856.0], [93.5, 862.0], [93.6, 862.0], [93.7, 864.0], [93.8, 867.0], [93.9, 868.0], [94.0, 868.0], [94.1, 871.0], [94.2, 881.0], [94.3, 881.0], [94.4, 881.0], [94.5, 886.0], [94.6, 890.0], [94.7, 905.0], [94.8, 905.0], [94.9, 905.0], [95.0, 910.0], [95.1, 910.0], [95.2, 912.0], [95.3, 912.0], [95.4, 922.0], [95.5, 922.0], [95.6, 922.0], [95.7, 932.0], [95.8, 939.0], [95.9, 939.0], [96.0, 947.0], [96.1, 948.0], [96.2, 967.0], [96.3, 967.0], [96.4, 968.0], [96.5, 968.0], [96.6, 977.0], [96.7, 977.0], [96.8, 981.0], [96.9, 987.0], [97.0, 987.0], [97.1, 992.0], [97.2, 993.0], [97.3, 994.0], [97.4, 994.0], [97.5, 997.0], [97.6, 1007.0], [97.7, 1014.0], [97.8, 1014.0], [97.9, 1029.0], [98.0, 1041.0], [98.1, 1044.0], [98.2, 1044.0], [98.3, 1056.0], [98.4, 1056.0], [98.5, 1056.0], [98.6, 1062.0], [98.7, 1064.0], [98.8, 1129.0], [98.9, 1129.0], [99.0, 1148.0], [99.1, 1170.0], [99.2, 1220.0], [99.3, 1220.0], [99.4, 1231.0], [99.5, 1240.0], [99.6, 1376.0], [99.7, 1376.0], [99.8, 1387.0], [99.9, 1410.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 333.0, "series": [{"data": [[600.0, 52.0], [700.0, 47.0], [200.0, 333.0], [800.0, 26.0], [900.0, 21.0], [1000.0, 9.0], [1100.0, 3.0], [300.0, 140.0], [1200.0, 3.0], [1300.0, 2.0], [1400.0, 1.0], [100.0, 25.0], [400.0, 54.0], [500.0, 19.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 183.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 552.0, "series": [{"data": [[0.0, 552.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 183.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.93877551020408, "minX": 1.60437792E12, "maxY": 9.93877551020408, "series": [{"data": [[1.60437792E12, 9.93877551020408]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437792E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 191.0, "minX": 1.0, "maxY": 1007.0, "series": [{"data": [[8.0, 775.0], [4.0, 206.0], [2.0, 681.0], [1.0, 1007.0], [9.0, 284.0], [10.0, 404.6707988980718], [5.0, 191.0], [6.0, 329.0], [3.0, 241.0], [7.0, 253.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 405.1129251700682]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 5339.283333333334, "minX": 1.60437792E12, "maxY": 373288.7166666667, "series": [{"data": [[1.60437792E12, 373288.7166666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60437792E12, 5339.283333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437792E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 405.1129251700682, "minX": 1.60437792E12, "maxY": 405.1129251700682, "series": [{"data": [[1.60437792E12, 405.1129251700682]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437792E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 404.9945578231292, "minX": 1.60437792E12, "maxY": 404.9945578231292, "series": [{"data": [[1.60437792E12, 404.9945578231292]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437792E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.12244897959183672, "minX": 1.60437792E12, "maxY": 0.12244897959183672, "series": [{"data": [[1.60437792E12, 0.12244897959183672]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437792E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 186.0, "minX": 1.60437792E12, "maxY": 1410.0, "series": [{"data": [[1.60437792E12, 1410.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60437792E12, 190.24799964904784]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60437792E12, 191.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60437792E12, 190.98399982452392]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60437792E12, 186.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60437792E12, 303.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437792E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 270.5, "minX": 2.0, "maxY": 852.0, "series": [{"data": [[8.0, 852.0], [2.0, 844.0], [19.0, 351.0], [21.0, 314.0], [23.0, 343.0], [24.0, 313.0], [25.0, 312.0], [26.0, 276.0], [27.0, 288.0], [28.0, 270.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 270.5, "minX": 2.0, "maxY": 844.0, "series": [{"data": [[8.0, 844.0], [2.0, 843.5], [19.0, 351.0], [21.0, 314.0], [23.0, 343.0], [24.0, 312.5], [25.0, 312.0], [26.0, 276.0], [27.0, 288.0], [28.0, 270.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 28.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60437792E12, "maxY": 12.25, "series": [{"data": [[1.60437792E12, 12.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437792E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60437792E12, "maxY": 12.25, "series": [{"data": [[1.60437792E12, 12.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60437792E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60437792E12, "maxY": 12.25, "series": [{"data": [[1.60437792E12, 12.25]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437792E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 12.25, "minX": 1.60437792E12, "maxY": 12.25, "series": [{"data": [[1.60437792E12, 12.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60437792E12, "title": "Total Transactions Per Second"}},
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

