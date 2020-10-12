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
        data: {"result": {"minY": 177.0, "minX": 0.0, "maxY": 2800.0, "series": [{"data": [[0.0, 177.0], [0.1, 177.0], [0.2, 178.0], [0.3, 179.0], [0.4, 179.0], [0.5, 180.0], [0.6, 183.0], [0.7, 184.0], [0.8, 184.0], [0.9, 185.0], [1.0, 186.0], [1.1, 187.0], [1.2, 187.0], [1.3, 188.0], [1.4, 188.0], [1.5, 193.0], [1.6, 193.0], [1.7, 193.0], [1.8, 193.0], [1.9, 193.0], [2.0, 194.0], [2.1, 194.0], [2.2, 195.0], [2.3, 195.0], [2.4, 195.0], [2.5, 195.0], [2.6, 196.0], [2.7, 196.0], [2.8, 196.0], [2.9, 196.0], [3.0, 197.0], [3.1, 197.0], [3.2, 197.0], [3.3, 197.0], [3.4, 197.0], [3.5, 197.0], [3.6, 198.0], [3.7, 200.0], [3.8, 200.0], [3.9, 201.0], [4.0, 201.0], [4.1, 201.0], [4.2, 201.0], [4.3, 201.0], [4.4, 202.0], [4.5, 202.0], [4.6, 202.0], [4.7, 202.0], [4.8, 202.0], [4.9, 203.0], [5.0, 203.0], [5.1, 204.0], [5.2, 205.0], [5.3, 205.0], [5.4, 207.0], [5.5, 208.0], [5.6, 211.0], [5.7, 211.0], [5.8, 211.0], [5.9, 211.0], [6.0, 217.0], [6.1, 217.0], [6.2, 219.0], [6.3, 223.0], [6.4, 226.0], [6.5, 226.0], [6.6, 227.0], [6.7, 227.0], [6.8, 227.0], [6.9, 227.0], [7.0, 228.0], [7.1, 229.0], [7.2, 229.0], [7.3, 230.0], [7.4, 230.0], [7.5, 230.0], [7.6, 230.0], [7.7, 231.0], [7.8, 231.0], [7.9, 232.0], [8.0, 232.0], [8.1, 232.0], [8.2, 235.0], [8.3, 237.0], [8.4, 237.0], [8.5, 237.0], [8.6, 243.0], [8.7, 243.0], [8.8, 244.0], [8.9, 244.0], [9.0, 245.0], [9.1, 245.0], [9.2, 245.0], [9.3, 247.0], [9.4, 247.0], [9.5, 247.0], [9.6, 248.0], [9.7, 249.0], [9.8, 250.0], [9.9, 250.0], [10.0, 250.0], [10.1, 250.0], [10.2, 250.0], [10.3, 251.0], [10.4, 252.0], [10.5, 252.0], [10.6, 252.0], [10.7, 252.0], [10.8, 252.0], [10.9, 253.0], [11.0, 253.0], [11.1, 253.0], [11.2, 253.0], [11.3, 254.0], [11.4, 254.0], [11.5, 254.0], [11.6, 254.0], [11.7, 254.0], [11.8, 255.0], [11.9, 255.0], [12.0, 255.0], [12.1, 255.0], [12.2, 256.0], [12.3, 257.0], [12.4, 257.0], [12.5, 257.0], [12.6, 257.0], [12.7, 258.0], [12.8, 259.0], [12.9, 259.0], [13.0, 259.0], [13.1, 259.0], [13.2, 259.0], [13.3, 259.0], [13.4, 260.0], [13.5, 260.0], [13.6, 260.0], [13.7, 260.0], [13.8, 261.0], [13.9, 261.0], [14.0, 261.0], [14.1, 261.0], [14.2, 262.0], [14.3, 262.0], [14.4, 262.0], [14.5, 263.0], [14.6, 263.0], [14.7, 264.0], [14.8, 264.0], [14.9, 264.0], [15.0, 264.0], [15.1, 264.0], [15.2, 264.0], [15.3, 264.0], [15.4, 264.0], [15.5, 264.0], [15.6, 264.0], [15.7, 264.0], [15.8, 265.0], [15.9, 265.0], [16.0, 265.0], [16.1, 265.0], [16.2, 266.0], [16.3, 266.0], [16.4, 266.0], [16.5, 266.0], [16.6, 267.0], [16.7, 267.0], [16.8, 268.0], [16.9, 268.0], [17.0, 268.0], [17.1, 268.0], [17.2, 269.0], [17.3, 269.0], [17.4, 269.0], [17.5, 269.0], [17.6, 269.0], [17.7, 269.0], [17.8, 269.0], [17.9, 270.0], [18.0, 270.0], [18.1, 270.0], [18.2, 270.0], [18.3, 270.0], [18.4, 271.0], [18.5, 271.0], [18.6, 271.0], [18.7, 272.0], [18.8, 272.0], [18.9, 272.0], [19.0, 273.0], [19.1, 273.0], [19.2, 273.0], [19.3, 273.0], [19.4, 273.0], [19.5, 273.0], [19.6, 274.0], [19.7, 274.0], [19.8, 274.0], [19.9, 274.0], [20.0, 275.0], [20.1, 275.0], [20.2, 275.0], [20.3, 275.0], [20.4, 275.0], [20.5, 275.0], [20.6, 276.0], [20.7, 276.0], [20.8, 276.0], [20.9, 277.0], [21.0, 277.0], [21.1, 278.0], [21.2, 278.0], [21.3, 278.0], [21.4, 278.0], [21.5, 278.0], [21.6, 278.0], [21.7, 279.0], [21.8, 279.0], [21.9, 279.0], [22.0, 279.0], [22.1, 279.0], [22.2, 280.0], [22.3, 280.0], [22.4, 280.0], [22.5, 280.0], [22.6, 280.0], [22.7, 280.0], [22.8, 280.0], [22.9, 280.0], [23.0, 280.0], [23.1, 280.0], [23.2, 281.0], [23.3, 281.0], [23.4, 281.0], [23.5, 284.0], [23.6, 284.0], [23.7, 284.0], [23.8, 284.0], [23.9, 285.0], [24.0, 285.0], [24.1, 285.0], [24.2, 285.0], [24.3, 286.0], [24.4, 286.0], [24.5, 287.0], [24.6, 287.0], [24.7, 287.0], [24.8, 287.0], [24.9, 287.0], [25.0, 287.0], [25.1, 287.0], [25.2, 288.0], [25.3, 288.0], [25.4, 289.0], [25.5, 290.0], [25.6, 291.0], [25.7, 291.0], [25.8, 292.0], [25.9, 292.0], [26.0, 293.0], [26.1, 293.0], [26.2, 294.0], [26.3, 294.0], [26.4, 295.0], [26.5, 295.0], [26.6, 295.0], [26.7, 296.0], [26.8, 296.0], [26.9, 297.0], [27.0, 297.0], [27.1, 298.0], [27.2, 298.0], [27.3, 299.0], [27.4, 299.0], [27.5, 302.0], [27.6, 302.0], [27.7, 304.0], [27.8, 304.0], [27.9, 305.0], [28.0, 305.0], [28.1, 310.0], [28.2, 312.0], [28.3, 313.0], [28.4, 313.0], [28.5, 317.0], [28.6, 318.0], [28.7, 318.0], [28.8, 320.0], [28.9, 320.0], [29.0, 322.0], [29.1, 322.0], [29.2, 326.0], [29.3, 331.0], [29.4, 333.0], [29.5, 333.0], [29.6, 335.0], [29.7, 337.0], [29.8, 340.0], [29.9, 340.0], [30.0, 340.0], [30.1, 340.0], [30.2, 340.0], [30.3, 340.0], [30.4, 340.0], [30.5, 341.0], [30.6, 341.0], [30.7, 342.0], [30.8, 342.0], [30.9, 343.0], [31.0, 343.0], [31.1, 343.0], [31.2, 344.0], [31.3, 344.0], [31.4, 344.0], [31.5, 346.0], [31.6, 346.0], [31.7, 346.0], [31.8, 347.0], [31.9, 347.0], [32.0, 347.0], [32.1, 347.0], [32.2, 348.0], [32.3, 349.0], [32.4, 350.0], [32.5, 350.0], [32.6, 350.0], [32.7, 350.0], [32.8, 351.0], [32.9, 351.0], [33.0, 351.0], [33.1, 351.0], [33.2, 351.0], [33.3, 351.0], [33.4, 352.0], [33.5, 353.0], [33.6, 353.0], [33.7, 353.0], [33.8, 353.0], [33.9, 353.0], [34.0, 353.0], [34.1, 353.0], [34.2, 354.0], [34.3, 354.0], [34.4, 354.0], [34.5, 354.0], [34.6, 354.0], [34.7, 355.0], [34.8, 355.0], [34.9, 355.0], [35.0, 355.0], [35.1, 355.0], [35.2, 355.0], [35.3, 355.0], [35.4, 355.0], [35.5, 355.0], [35.6, 357.0], [35.7, 357.0], [35.8, 357.0], [35.9, 357.0], [36.0, 357.0], [36.1, 358.0], [36.2, 358.0], [36.3, 358.0], [36.4, 358.0], [36.5, 359.0], [36.6, 359.0], [36.7, 359.0], [36.8, 359.0], [36.9, 359.0], [37.0, 359.0], [37.1, 360.0], [37.2, 360.0], [37.3, 360.0], [37.4, 360.0], [37.5, 360.0], [37.6, 361.0], [37.7, 361.0], [37.8, 361.0], [37.9, 361.0], [38.0, 361.0], [38.1, 361.0], [38.2, 361.0], [38.3, 362.0], [38.4, 362.0], [38.5, 362.0], [38.6, 362.0], [38.7, 362.0], [38.8, 362.0], [38.9, 362.0], [39.0, 362.0], [39.1, 363.0], [39.2, 363.0], [39.3, 363.0], [39.4, 363.0], [39.5, 363.0], [39.6, 363.0], [39.7, 363.0], [39.8, 364.0], [39.9, 364.0], [40.0, 364.0], [40.1, 364.0], [40.2, 365.0], [40.3, 365.0], [40.4, 365.0], [40.5, 365.0], [40.6, 365.0], [40.7, 365.0], [40.8, 365.0], [40.9, 366.0], [41.0, 366.0], [41.1, 366.0], [41.2, 366.0], [41.3, 366.0], [41.4, 366.0], [41.5, 367.0], [41.6, 367.0], [41.7, 367.0], [41.8, 367.0], [41.9, 367.0], [42.0, 368.0], [42.1, 368.0], [42.2, 368.0], [42.3, 368.0], [42.4, 368.0], [42.5, 368.0], [42.6, 368.0], [42.7, 368.0], [42.8, 368.0], [42.9, 369.0], [43.0, 369.0], [43.1, 369.0], [43.2, 369.0], [43.3, 369.0], [43.4, 369.0], [43.5, 369.0], [43.6, 369.0], [43.7, 370.0], [43.8, 370.0], [43.9, 370.0], [44.0, 370.0], [44.1, 370.0], [44.2, 370.0], [44.3, 370.0], [44.4, 371.0], [44.5, 371.0], [44.6, 371.0], [44.7, 373.0], [44.8, 373.0], [44.9, 374.0], [45.0, 374.0], [45.1, 374.0], [45.2, 374.0], [45.3, 374.0], [45.4, 374.0], [45.5, 374.0], [45.6, 374.0], [45.7, 374.0], [45.8, 375.0], [45.9, 376.0], [46.0, 376.0], [46.1, 376.0], [46.2, 376.0], [46.3, 376.0], [46.4, 377.0], [46.5, 377.0], [46.6, 377.0], [46.7, 377.0], [46.8, 377.0], [46.9, 377.0], [47.0, 377.0], [47.1, 377.0], [47.2, 377.0], [47.3, 377.0], [47.4, 378.0], [47.5, 378.0], [47.6, 378.0], [47.7, 378.0], [47.8, 378.0], [47.9, 379.0], [48.0, 379.0], [48.1, 380.0], [48.2, 380.0], [48.3, 380.0], [48.4, 380.0], [48.5, 380.0], [48.6, 380.0], [48.7, 380.0], [48.8, 381.0], [48.9, 382.0], [49.0, 382.0], [49.1, 382.0], [49.2, 382.0], [49.3, 383.0], [49.4, 383.0], [49.5, 383.0], [49.6, 384.0], [49.7, 385.0], [49.8, 385.0], [49.9, 385.0], [50.0, 386.0], [50.1, 386.0], [50.2, 386.0], [50.3, 386.0], [50.4, 387.0], [50.5, 388.0], [50.6, 388.0], [50.7, 388.0], [50.8, 389.0], [50.9, 391.0], [51.0, 391.0], [51.1, 391.0], [51.2, 392.0], [51.3, 394.0], [51.4, 394.0], [51.5, 395.0], [51.6, 395.0], [51.7, 395.0], [51.8, 398.0], [51.9, 398.0], [52.0, 400.0], [52.1, 400.0], [52.2, 400.0], [52.3, 402.0], [52.4, 402.0], [52.5, 402.0], [52.6, 402.0], [52.7, 403.0], [52.8, 405.0], [52.9, 405.0], [53.0, 406.0], [53.1, 408.0], [53.2, 408.0], [53.3, 408.0], [53.4, 409.0], [53.5, 409.0], [53.6, 409.0], [53.7, 410.0], [53.8, 411.0], [53.9, 412.0], [54.0, 412.0], [54.1, 413.0], [54.2, 413.0], [54.3, 414.0], [54.4, 414.0], [54.5, 417.0], [54.6, 419.0], [54.7, 420.0], [54.8, 420.0], [54.9, 421.0], [55.0, 421.0], [55.1, 421.0], [55.2, 421.0], [55.3, 422.0], [55.4, 422.0], [55.5, 422.0], [55.6, 422.0], [55.7, 422.0], [55.8, 422.0], [55.9, 422.0], [56.0, 423.0], [56.1, 423.0], [56.2, 423.0], [56.3, 423.0], [56.4, 424.0], [56.5, 425.0], [56.6, 428.0], [56.7, 428.0], [56.8, 428.0], [56.9, 429.0], [57.0, 429.0], [57.1, 430.0], [57.2, 430.0], [57.3, 431.0], [57.4, 431.0], [57.5, 432.0], [57.6, 434.0], [57.7, 435.0], [57.8, 435.0], [57.9, 435.0], [58.0, 435.0], [58.1, 435.0], [58.2, 435.0], [58.3, 436.0], [58.4, 436.0], [58.5, 436.0], [58.6, 437.0], [58.7, 437.0], [58.8, 437.0], [58.9, 437.0], [59.0, 437.0], [59.1, 438.0], [59.2, 438.0], [59.3, 438.0], [59.4, 441.0], [59.5, 441.0], [59.6, 441.0], [59.7, 441.0], [59.8, 443.0], [59.9, 443.0], [60.0, 443.0], [60.1, 443.0], [60.2, 443.0], [60.3, 443.0], [60.4, 443.0], [60.5, 445.0], [60.6, 445.0], [60.7, 446.0], [60.8, 446.0], [60.9, 446.0], [61.0, 447.0], [61.1, 447.0], [61.2, 447.0], [61.3, 448.0], [61.4, 449.0], [61.5, 449.0], [61.6, 449.0], [61.7, 449.0], [61.8, 449.0], [61.9, 449.0], [62.0, 450.0], [62.1, 451.0], [62.2, 452.0], [62.3, 452.0], [62.4, 453.0], [62.5, 455.0], [62.6, 458.0], [62.7, 458.0], [62.8, 460.0], [62.9, 460.0], [63.0, 462.0], [63.1, 462.0], [63.2, 463.0], [63.3, 463.0], [63.4, 463.0], [63.5, 463.0], [63.6, 465.0], [63.7, 471.0], [63.8, 471.0], [63.9, 472.0], [64.0, 473.0], [64.1, 474.0], [64.2, 474.0], [64.3, 474.0], [64.4, 478.0], [64.5, 481.0], [64.6, 481.0], [64.7, 482.0], [64.8, 483.0], [64.9, 487.0], [65.0, 487.0], [65.1, 488.0], [65.2, 489.0], [65.3, 489.0], [65.4, 489.0], [65.5, 490.0], [65.6, 490.0], [65.7, 490.0], [65.8, 492.0], [65.9, 493.0], [66.0, 494.0], [66.1, 494.0], [66.2, 497.0], [66.3, 497.0], [66.4, 497.0], [66.5, 497.0], [66.6, 498.0], [66.7, 499.0], [66.8, 499.0], [66.9, 500.0], [67.0, 501.0], [67.1, 501.0], [67.2, 501.0], [67.3, 501.0], [67.4, 506.0], [67.5, 506.0], [67.6, 506.0], [67.7, 506.0], [67.8, 507.0], [67.9, 507.0], [68.0, 507.0], [68.1, 508.0], [68.2, 508.0], [68.3, 509.0], [68.4, 509.0], [68.5, 509.0], [68.6, 510.0], [68.7, 510.0], [68.8, 510.0], [68.9, 510.0], [69.0, 511.0], [69.1, 511.0], [69.2, 513.0], [69.3, 515.0], [69.4, 515.0], [69.5, 515.0], [69.6, 516.0], [69.7, 516.0], [69.8, 517.0], [69.9, 517.0], [70.0, 518.0], [70.1, 518.0], [70.2, 518.0], [70.3, 519.0], [70.4, 519.0], [70.5, 519.0], [70.6, 519.0], [70.7, 519.0], [70.8, 521.0], [70.9, 521.0], [71.0, 521.0], [71.1, 522.0], [71.2, 524.0], [71.3, 524.0], [71.4, 524.0], [71.5, 524.0], [71.6, 524.0], [71.7, 524.0], [71.8, 526.0], [71.9, 526.0], [72.0, 527.0], [72.1, 527.0], [72.2, 528.0], [72.3, 528.0], [72.4, 528.0], [72.5, 528.0], [72.6, 528.0], [72.7, 529.0], [72.8, 529.0], [72.9, 529.0], [73.0, 530.0], [73.1, 530.0], [73.2, 531.0], [73.3, 531.0], [73.4, 532.0], [73.5, 532.0], [73.6, 532.0], [73.7, 534.0], [73.8, 534.0], [73.9, 534.0], [74.0, 534.0], [74.1, 535.0], [74.2, 537.0], [74.3, 538.0], [74.4, 538.0], [74.5, 538.0], [74.6, 539.0], [74.7, 539.0], [74.8, 539.0], [74.9, 539.0], [75.0, 540.0], [75.1, 540.0], [75.2, 540.0], [75.3, 540.0], [75.4, 542.0], [75.5, 542.0], [75.6, 543.0], [75.7, 544.0], [75.8, 544.0], [75.9, 544.0], [76.0, 546.0], [76.1, 548.0], [76.2, 548.0], [76.3, 548.0], [76.4, 549.0], [76.5, 549.0], [76.6, 549.0], [76.7, 549.0], [76.8, 549.0], [76.9, 551.0], [77.0, 551.0], [77.1, 551.0], [77.2, 552.0], [77.3, 552.0], [77.4, 552.0], [77.5, 555.0], [77.6, 557.0], [77.7, 561.0], [77.8, 561.0], [77.9, 565.0], [78.0, 565.0], [78.1, 567.0], [78.2, 567.0], [78.3, 568.0], [78.4, 568.0], [78.5, 568.0], [78.6, 570.0], [78.7, 570.0], [78.8, 570.0], [78.9, 570.0], [79.0, 572.0], [79.1, 572.0], [79.2, 572.0], [79.3, 572.0], [79.4, 572.0], [79.5, 573.0], [79.6, 574.0], [79.7, 574.0], [79.8, 575.0], [79.9, 578.0], [80.0, 582.0], [80.1, 582.0], [80.2, 582.0], [80.3, 583.0], [80.4, 583.0], [80.5, 586.0], [80.6, 586.0], [80.7, 586.0], [80.8, 586.0], [80.9, 590.0], [81.0, 592.0], [81.1, 592.0], [81.2, 592.0], [81.3, 594.0], [81.4, 595.0], [81.5, 599.0], [81.6, 599.0], [81.7, 599.0], [81.8, 600.0], [81.9, 600.0], [82.0, 601.0], [82.1, 604.0], [82.2, 608.0], [82.3, 608.0], [82.4, 608.0], [82.5, 610.0], [82.6, 610.0], [82.7, 610.0], [82.8, 610.0], [82.9, 611.0], [83.0, 614.0], [83.1, 614.0], [83.2, 615.0], [83.3, 617.0], [83.4, 617.0], [83.5, 617.0], [83.6, 618.0], [83.7, 619.0], [83.8, 619.0], [83.9, 620.0], [84.0, 621.0], [84.1, 622.0], [84.2, 622.0], [84.3, 625.0], [84.4, 625.0], [84.5, 626.0], [84.6, 626.0], [84.7, 626.0], [84.8, 628.0], [84.9, 628.0], [85.0, 628.0], [85.1, 631.0], [85.2, 633.0], [85.3, 633.0], [85.4, 633.0], [85.5, 634.0], [85.6, 634.0], [85.7, 634.0], [85.8, 635.0], [85.9, 642.0], [86.0, 643.0], [86.1, 643.0], [86.2, 644.0], [86.3, 646.0], [86.4, 647.0], [86.5, 647.0], [86.6, 647.0], [86.7, 648.0], [86.8, 648.0], [86.9, 650.0], [87.0, 652.0], [87.1, 653.0], [87.2, 653.0], [87.3, 655.0], [87.4, 656.0], [87.5, 664.0], [87.6, 664.0], [87.7, 668.0], [87.8, 678.0], [87.9, 679.0], [88.0, 679.0], [88.1, 680.0], [88.2, 681.0], [88.3, 681.0], [88.4, 681.0], [88.5, 682.0], [88.6, 683.0], [88.7, 683.0], [88.8, 683.0], [88.9, 683.0], [89.0, 684.0], [89.1, 684.0], [89.2, 686.0], [89.3, 686.0], [89.4, 687.0], [89.5, 687.0], [89.6, 690.0], [89.7, 691.0], [89.8, 696.0], [89.9, 696.0], [90.0, 697.0], [90.1, 697.0], [90.2, 697.0], [90.3, 698.0], [90.4, 700.0], [90.5, 701.0], [90.6, 701.0], [90.7, 701.0], [90.8, 704.0], [90.9, 706.0], [91.0, 706.0], [91.1, 710.0], [91.2, 711.0], [91.3, 713.0], [91.4, 713.0], [91.5, 713.0], [91.6, 719.0], [91.7, 719.0], [91.8, 719.0], [91.9, 722.0], [92.0, 723.0], [92.1, 723.0], [92.2, 725.0], [92.3, 728.0], [92.4, 729.0], [92.5, 729.0], [92.6, 733.0], [92.7, 736.0], [92.8, 737.0], [92.9, 737.0], [93.0, 740.0], [93.1, 742.0], [93.2, 742.0], [93.3, 742.0], [93.4, 745.0], [93.5, 758.0], [93.6, 758.0], [93.7, 759.0], [93.8, 760.0], [93.9, 790.0], [94.0, 790.0], [94.1, 794.0], [94.2, 794.0], [94.3, 798.0], [94.4, 798.0], [94.5, 811.0], [94.6, 818.0], [94.7, 822.0], [94.8, 822.0], [94.9, 823.0], [95.0, 835.0], [95.1, 835.0], [95.2, 836.0], [95.3, 846.0], [95.4, 853.0], [95.5, 853.0], [95.6, 854.0], [95.7, 861.0], [95.8, 878.0], [95.9, 878.0], [96.0, 889.0], [96.1, 895.0], [96.2, 902.0], [96.3, 902.0], [96.4, 909.0], [96.5, 915.0], [96.6, 920.0], [96.7, 920.0], [96.8, 922.0], [96.9, 931.0], [97.0, 931.0], [97.1, 939.0], [97.2, 992.0], [97.3, 997.0], [97.4, 997.0], [97.5, 1009.0], [97.6, 1016.0], [97.7, 1060.0], [97.8, 1060.0], [97.9, 1082.0], [98.0, 1098.0], [98.1, 1168.0], [98.2, 1168.0], [98.3, 1169.0], [98.4, 1196.0], [98.5, 1196.0], [98.6, 1206.0], [98.7, 1222.0], [98.8, 1307.0], [98.9, 1307.0], [99.0, 1578.0], [99.1, 1626.0], [99.2, 1630.0], [99.3, 1630.0], [99.4, 2337.0], [99.5, 2691.0], [99.6, 2740.0], [99.7, 2740.0], [99.8, 2751.0], [99.9, 2800.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 180.0, "series": [{"data": [[2300.0, 1.0], [600.0, 63.0], [2600.0, 1.0], [2700.0, 2.0], [700.0, 30.0], [2800.0, 1.0], [200.0, 175.0], [800.0, 13.0], [900.0, 9.0], [1000.0, 5.0], [1100.0, 3.0], [300.0, 180.0], [1200.0, 2.0], [1300.0, 1.0], [1500.0, 1.0], [400.0, 109.0], [100.0, 27.0], [1600.0, 2.0], [500.0, 110.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 492.0, "series": [{"data": [[0.0, 492.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 235.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60246488E12, "maxY": 1.0, "series": [{"data": [[1.60246512E12, 1.0], [1.60246518E12, 1.0], [1.602465E12, 1.0], [1.60246506E12, 1.0], [1.60246488E12, 1.0], [1.60246494E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246518E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 457.7428571428569, "minX": 1.0, "maxY": 457.7428571428569, "series": [{"data": [[1.0, 457.7428571428569]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 457.7428571428569]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 665.9833333333333, "minX": 1.60246488E12, "maxY": 357130.06666666665, "series": [{"data": [[1.60246512E12, 285674.2166666667], [1.60246518E12, 280389.0833333333], [1.602465E12, 289839.76666666666], [1.60246506E12, 357130.06666666665], [1.60246488E12, 342284.56666666665], [1.60246494E12, 280428.06666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246512E12, 907.7], [1.60246518E12, 1012.8166666666667], [1.602465E12, 1070.4166666666667], [1.60246506E12, 1018.3], [1.60246488E12, 665.9833333333333], [1.60246494E12, 847.8166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246518E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 390.8823529411765, "minX": 1.60246488E12, "maxY": 520.5714285714286, "series": [{"data": [[1.60246512E12, 497.55833333333317], [1.60246518E12, 390.8823529411765], [1.602465E12, 431.37062937062944], [1.60246506E12, 439.9264705882353], [1.60246488E12, 497.2045454545455], [1.60246494E12, 520.5714285714286]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246518E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 389.8088235294118, "minX": 1.60246488E12, "maxY": 519.3125000000001, "series": [{"data": [[1.60246512E12, 496.43333333333345], [1.60246518E12, 389.8088235294118], [1.602465E12, 430.29370629370635], [1.60246506E12, 438.84558823529414], [1.60246488E12, 495.93181818181824], [1.60246494E12, 519.3125000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246518E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.008333333333333335, "minX": 1.60246488E12, "maxY": 0.363636363636364, "series": [{"data": [[1.60246512E12, 0.008333333333333335], [1.60246518E12, 0.02941176470588237], [1.602465E12, 0.02097902097902099], [1.60246506E12, 0.014705882352941181], [1.60246488E12, 0.363636363636364], [1.60246494E12, 0.017857142857142877]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246518E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 177.0, "minX": 1.60246488E12, "maxY": 2800.0, "series": [{"data": [[1.60246512E12, 823.0], [1.60246518E12, 1630.0], [1.602465E12, 2337.0], [1.60246506E12, 2800.0], [1.60246488E12, 2751.0], [1.60246494E12, 2740.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246512E12, 254.0469993364811], [1.60246518E12, 184.9319998693466], [1.602465E12, 201.0], [1.60246506E12, 177.23299996733667], [1.60246488E12, 193.0], [1.60246494E12, 333.0339999461174]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246512E12, 256.5517002654076], [1.60246518E12, 185.42520005226135], [1.602465E12, 201.0], [1.60246506E12, 177.35630001306535], [1.60246488E12, 193.0], [1.60246494E12, 333.237400021553]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246512E12, 255.43849966824055], [1.60246518E12, 185.20599993467332], [1.602465E12, 201.0], [1.60246506E12, 177.30149998366832], [1.60246488E12, 193.0], [1.60246494E12, 333.1469999730587]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246512E12, 252.0], [1.60246518E12, 184.0], [1.602465E12, 201.0], [1.60246506E12, 177.0], [1.60246488E12, 193.0], [1.60246494E12, 333.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246512E12, 501.0], [1.60246518E12, 285.0], [1.602465E12, 370.0], [1.60246506E12, 368.5], [1.60246488E12, 372.0], [1.60246494E12, 468.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246518E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 201.0, "minX": 1.0, "maxY": 699.0, "series": [{"data": [[2.0, 476.0], [4.0, 269.5], [1.0, 699.0], [5.0, 201.0], [3.0, 361.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 201.0, "minX": 1.0, "maxY": 696.5, "series": [{"data": [[2.0, 475.0], [4.0, 269.0], [1.0, 696.5], [5.0, 201.0], [3.0, 361.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4833333333333334, "minX": 1.60246488E12, "maxY": 2.3833333333333333, "series": [{"data": [[1.60246512E12, 2.0], [1.60246518E12, 2.25], [1.602465E12, 2.3833333333333333], [1.60246506E12, 2.2666666666666666], [1.60246488E12, 1.4833333333333334], [1.60246494E12, 1.8666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246518E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60246488E12, "maxY": 2.3833333333333333, "series": [{"data": [[1.60246512E12, 2.0], [1.60246518E12, 2.2666666666666666], [1.602465E12, 2.3833333333333333], [1.60246506E12, 2.2666666666666666], [1.60246488E12, 1.4666666666666666], [1.60246494E12, 1.8666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246518E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60246488E12, "maxY": 2.3833333333333333, "series": [{"data": [[1.60246512E12, 2.0], [1.60246518E12, 2.2666666666666666], [1.602465E12, 2.3833333333333333], [1.60246506E12, 2.2666666666666666], [1.60246488E12, 1.4666666666666666], [1.60246494E12, 1.8666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246518E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60246488E12, "maxY": 2.3833333333333333, "series": [{"data": [[1.60246512E12, 2.0], [1.60246518E12, 2.2666666666666666], [1.602465E12, 2.3833333333333333], [1.60246506E12, 2.2666666666666666], [1.60246488E12, 1.4666666666666666], [1.60246494E12, 1.8666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246518E12, "title": "Total Transactions Per Second"}},
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

