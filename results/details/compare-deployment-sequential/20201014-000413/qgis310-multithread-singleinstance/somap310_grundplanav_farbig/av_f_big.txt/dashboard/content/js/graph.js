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
        data: {"result": {"minY": 159.0, "minX": 0.0, "maxY": 2732.0, "series": [{"data": [[0.0, 159.0], [0.1, 159.0], [0.2, 169.0], [0.3, 172.0], [0.4, 172.0], [0.5, 172.0], [0.6, 173.0], [0.7, 173.0], [0.8, 173.0], [0.9, 174.0], [1.0, 175.0], [1.1, 183.0], [1.2, 183.0], [1.3, 183.0], [1.4, 187.0], [1.5, 188.0], [1.6, 188.0], [1.7, 189.0], [1.8, 189.0], [1.9, 189.0], [2.0, 190.0], [2.1, 191.0], [2.2, 192.0], [2.3, 192.0], [2.4, 193.0], [2.5, 193.0], [2.6, 196.0], [2.7, 196.0], [2.8, 197.0], [2.9, 197.0], [3.0, 197.0], [3.1, 197.0], [3.2, 197.0], [3.3, 199.0], [3.4, 199.0], [3.5, 199.0], [3.6, 200.0], [3.7, 202.0], [3.8, 202.0], [3.9, 205.0], [4.0, 205.0], [4.1, 206.0], [4.2, 206.0], [4.3, 209.0], [4.4, 211.0], [4.5, 211.0], [4.6, 211.0], [4.7, 211.0], [4.8, 212.0], [4.9, 213.0], [5.0, 213.0], [5.1, 213.0], [5.2, 213.0], [5.3, 213.0], [5.4, 214.0], [5.5, 214.0], [5.6, 215.0], [5.7, 215.0], [5.8, 216.0], [5.9, 218.0], [6.0, 219.0], [6.1, 219.0], [6.2, 222.0], [6.3, 225.0], [6.4, 228.0], [6.5, 228.0], [6.6, 230.0], [6.7, 230.0], [6.8, 230.0], [6.9, 230.0], [7.0, 232.0], [7.1, 235.0], [7.2, 235.0], [7.3, 235.0], [7.4, 235.0], [7.5, 237.0], [7.6, 237.0], [7.7, 237.0], [7.8, 237.0], [7.9, 238.0], [8.0, 238.0], [8.1, 241.0], [8.2, 242.0], [8.3, 242.0], [8.4, 242.0], [8.5, 243.0], [8.6, 244.0], [8.7, 244.0], [8.8, 245.0], [8.9, 245.0], [9.0, 246.0], [9.1, 246.0], [9.2, 246.0], [9.3, 247.0], [9.4, 248.0], [9.5, 248.0], [9.6, 249.0], [9.7, 250.0], [9.8, 250.0], [9.9, 250.0], [10.0, 250.0], [10.1, 253.0], [10.2, 253.0], [10.3, 253.0], [10.4, 253.0], [10.5, 253.0], [10.6, 253.0], [10.7, 254.0], [10.8, 254.0], [10.9, 255.0], [11.0, 255.0], [11.1, 255.0], [11.2, 256.0], [11.3, 256.0], [11.4, 256.0], [11.5, 257.0], [11.6, 257.0], [11.7, 257.0], [11.8, 257.0], [11.9, 258.0], [12.0, 258.0], [12.1, 258.0], [12.2, 258.0], [12.3, 258.0], [12.4, 258.0], [12.5, 258.0], [12.6, 260.0], [12.7, 260.0], [12.8, 260.0], [12.9, 260.0], [13.0, 260.0], [13.1, 261.0], [13.2, 261.0], [13.3, 261.0], [13.4, 261.0], [13.5, 261.0], [13.6, 261.0], [13.7, 261.0], [13.8, 261.0], [13.9, 261.0], [14.0, 261.0], [14.1, 261.0], [14.2, 262.0], [14.3, 262.0], [14.4, 262.0], [14.5, 263.0], [14.6, 264.0], [14.7, 264.0], [14.8, 264.0], [14.9, 264.0], [15.0, 264.0], [15.1, 264.0], [15.2, 265.0], [15.3, 265.0], [15.4, 265.0], [15.5, 265.0], [15.6, 265.0], [15.7, 265.0], [15.8, 266.0], [15.9, 266.0], [16.0, 267.0], [16.1, 267.0], [16.2, 267.0], [16.3, 267.0], [16.4, 268.0], [16.5, 268.0], [16.6, 268.0], [16.7, 268.0], [16.8, 268.0], [16.9, 268.0], [17.0, 268.0], [17.1, 270.0], [17.2, 270.0], [17.3, 271.0], [17.4, 271.0], [17.5, 271.0], [17.6, 273.0], [17.7, 273.0], [17.8, 273.0], [17.9, 273.0], [18.0, 274.0], [18.1, 275.0], [18.2, 275.0], [18.3, 276.0], [18.4, 277.0], [18.5, 277.0], [18.6, 277.0], [18.7, 278.0], [18.8, 279.0], [18.9, 279.0], [19.0, 279.0], [19.1, 279.0], [19.2, 280.0], [19.3, 280.0], [19.4, 281.0], [19.5, 281.0], [19.6, 281.0], [19.7, 281.0], [19.8, 281.0], [19.9, 282.0], [20.0, 282.0], [20.1, 282.0], [20.2, 282.0], [20.3, 282.0], [20.4, 282.0], [20.5, 283.0], [20.6, 283.0], [20.7, 283.0], [20.8, 283.0], [20.9, 283.0], [21.0, 284.0], [21.1, 285.0], [21.2, 285.0], [21.3, 285.0], [21.4, 285.0], [21.5, 285.0], [21.6, 285.0], [21.7, 285.0], [21.8, 286.0], [21.9, 286.0], [22.0, 286.0], [22.1, 286.0], [22.2, 287.0], [22.3, 287.0], [22.4, 287.0], [22.5, 287.0], [22.6, 288.0], [22.7, 288.0], [22.8, 288.0], [22.9, 288.0], [23.0, 289.0], [23.1, 289.0], [23.2, 289.0], [23.3, 289.0], [23.4, 289.0], [23.5, 290.0], [23.6, 290.0], [23.7, 290.0], [23.8, 290.0], [23.9, 291.0], [24.0, 291.0], [24.1, 292.0], [24.2, 292.0], [24.3, 292.0], [24.4, 292.0], [24.5, 293.0], [24.6, 293.0], [24.7, 293.0], [24.8, 293.0], [24.9, 293.0], [25.0, 293.0], [25.1, 295.0], [25.2, 295.0], [25.3, 295.0], [25.4, 296.0], [25.5, 296.0], [25.6, 296.0], [25.7, 296.0], [25.8, 297.0], [25.9, 297.0], [26.0, 298.0], [26.1, 298.0], [26.2, 299.0], [26.3, 301.0], [26.4, 301.0], [26.5, 301.0], [26.6, 303.0], [26.7, 304.0], [26.8, 304.0], [26.9, 304.0], [27.0, 305.0], [27.1, 305.0], [27.2, 305.0], [27.3, 307.0], [27.4, 307.0], [27.5, 307.0], [27.6, 307.0], [27.7, 308.0], [27.8, 310.0], [27.9, 311.0], [28.0, 311.0], [28.1, 313.0], [28.2, 317.0], [28.3, 318.0], [28.4, 318.0], [28.5, 320.0], [28.6, 323.0], [28.7, 323.0], [28.8, 325.0], [28.9, 326.0], [29.0, 327.0], [29.1, 327.0], [29.2, 329.0], [29.3, 329.0], [29.4, 331.0], [29.5, 331.0], [29.6, 333.0], [29.7, 333.0], [29.8, 338.0], [29.9, 338.0], [30.0, 344.0], [30.1, 345.0], [30.2, 345.0], [30.3, 346.0], [30.4, 347.0], [30.5, 347.0], [30.6, 347.0], [30.7, 347.0], [30.8, 347.0], [30.9, 348.0], [31.0, 348.0], [31.1, 350.0], [31.2, 350.0], [31.3, 351.0], [31.4, 351.0], [31.5, 351.0], [31.6, 352.0], [31.7, 352.0], [31.8, 353.0], [31.9, 355.0], [32.0, 356.0], [32.1, 356.0], [32.2, 356.0], [32.3, 359.0], [32.4, 360.0], [32.5, 360.0], [32.6, 361.0], [32.7, 362.0], [32.8, 362.0], [32.9, 362.0], [33.0, 362.0], [33.1, 363.0], [33.2, 363.0], [33.3, 363.0], [33.4, 365.0], [33.5, 365.0], [33.6, 365.0], [33.7, 367.0], [33.8, 368.0], [33.9, 368.0], [34.0, 368.0], [34.1, 368.0], [34.2, 369.0], [34.3, 369.0], [34.4, 369.0], [34.5, 370.0], [34.6, 370.0], [34.7, 370.0], [34.8, 370.0], [34.9, 371.0], [35.0, 373.0], [35.1, 373.0], [35.2, 374.0], [35.3, 375.0], [35.4, 375.0], [35.5, 375.0], [35.6, 376.0], [35.7, 377.0], [35.8, 377.0], [35.9, 377.0], [36.0, 378.0], [36.1, 378.0], [36.2, 379.0], [36.3, 379.0], [36.4, 380.0], [36.5, 381.0], [36.6, 381.0], [36.7, 381.0], [36.8, 381.0], [36.9, 381.0], [37.0, 381.0], [37.1, 382.0], [37.2, 382.0], [37.3, 382.0], [37.4, 382.0], [37.5, 382.0], [37.6, 382.0], [37.7, 383.0], [37.8, 383.0], [37.9, 383.0], [38.0, 383.0], [38.1, 383.0], [38.2, 383.0], [38.3, 383.0], [38.4, 383.0], [38.5, 383.0], [38.6, 384.0], [38.7, 384.0], [38.8, 384.0], [38.9, 384.0], [39.0, 384.0], [39.1, 384.0], [39.2, 385.0], [39.3, 385.0], [39.4, 385.0], [39.5, 385.0], [39.6, 385.0], [39.7, 385.0], [39.8, 385.0], [39.9, 385.0], [40.0, 385.0], [40.1, 385.0], [40.2, 385.0], [40.3, 386.0], [40.4, 386.0], [40.5, 386.0], [40.6, 387.0], [40.7, 387.0], [40.8, 387.0], [40.9, 387.0], [41.0, 387.0], [41.1, 388.0], [41.2, 388.0], [41.3, 388.0], [41.4, 389.0], [41.5, 389.0], [41.6, 389.0], [41.7, 389.0], [41.8, 389.0], [41.9, 389.0], [42.0, 389.0], [42.1, 389.0], [42.2, 389.0], [42.3, 389.0], [42.4, 390.0], [42.5, 390.0], [42.6, 390.0], [42.7, 390.0], [42.8, 390.0], [42.9, 391.0], [43.0, 391.0], [43.1, 391.0], [43.2, 391.0], [43.3, 391.0], [43.4, 391.0], [43.5, 391.0], [43.6, 391.0], [43.7, 392.0], [43.8, 392.0], [43.9, 392.0], [44.0, 392.0], [44.1, 392.0], [44.2, 392.0], [44.3, 393.0], [44.4, 393.0], [44.5, 393.0], [44.6, 393.0], [44.7, 393.0], [44.8, 393.0], [44.9, 393.0], [45.0, 393.0], [45.1, 393.0], [45.2, 393.0], [45.3, 393.0], [45.4, 393.0], [45.5, 394.0], [45.6, 395.0], [45.7, 395.0], [45.8, 395.0], [45.9, 395.0], [46.0, 395.0], [46.1, 395.0], [46.2, 396.0], [46.3, 396.0], [46.4, 396.0], [46.5, 396.0], [46.6, 396.0], [46.7, 396.0], [46.8, 396.0], [46.9, 396.0], [47.0, 396.0], [47.1, 397.0], [47.2, 397.0], [47.3, 397.0], [47.4, 397.0], [47.5, 397.0], [47.6, 397.0], [47.7, 398.0], [47.8, 398.0], [47.9, 398.0], [48.0, 398.0], [48.1, 399.0], [48.2, 400.0], [48.3, 400.0], [48.4, 400.0], [48.5, 401.0], [48.6, 402.0], [48.7, 402.0], [48.8, 402.0], [48.9, 402.0], [49.0, 403.0], [49.1, 403.0], [49.2, 403.0], [49.3, 403.0], [49.4, 403.0], [49.5, 403.0], [49.6, 404.0], [49.7, 404.0], [49.8, 405.0], [49.9, 405.0], [50.0, 406.0], [50.1, 406.0], [50.2, 406.0], [50.3, 407.0], [50.4, 407.0], [50.5, 407.0], [50.6, 407.0], [50.7, 407.0], [50.8, 408.0], [50.9, 408.0], [51.0, 408.0], [51.1, 409.0], [51.2, 409.0], [51.3, 409.0], [51.4, 409.0], [51.5, 409.0], [51.6, 410.0], [51.7, 410.0], [51.8, 411.0], [51.9, 411.0], [52.0, 411.0], [52.1, 411.0], [52.2, 411.0], [52.3, 413.0], [52.4, 413.0], [52.5, 413.0], [52.6, 414.0], [52.7, 415.0], [52.8, 415.0], [52.9, 415.0], [53.0, 417.0], [53.1, 418.0], [53.2, 418.0], [53.3, 418.0], [53.4, 420.0], [53.5, 420.0], [53.6, 420.0], [53.7, 421.0], [53.8, 422.0], [53.9, 422.0], [54.0, 422.0], [54.1, 423.0], [54.2, 423.0], [54.3, 424.0], [54.4, 424.0], [54.5, 425.0], [54.6, 425.0], [54.7, 426.0], [54.8, 426.0], [54.9, 426.0], [55.0, 428.0], [55.1, 428.0], [55.2, 428.0], [55.3, 430.0], [55.4, 430.0], [55.5, 430.0], [55.6, 431.0], [55.7, 432.0], [55.8, 433.0], [55.9, 433.0], [56.0, 439.0], [56.1, 439.0], [56.2, 443.0], [56.3, 443.0], [56.4, 444.0], [56.5, 444.0], [56.6, 445.0], [56.7, 445.0], [56.8, 445.0], [56.9, 446.0], [57.0, 446.0], [57.1, 446.0], [57.2, 447.0], [57.3, 448.0], [57.4, 448.0], [57.5, 448.0], [57.6, 450.0], [57.7, 450.0], [57.8, 450.0], [57.9, 450.0], [58.0, 451.0], [58.1, 451.0], [58.2, 451.0], [58.3, 451.0], [58.4, 452.0], [58.5, 452.0], [58.6, 452.0], [58.7, 452.0], [58.8, 452.0], [58.9, 452.0], [59.0, 453.0], [59.1, 455.0], [59.2, 456.0], [59.3, 456.0], [59.4, 458.0], [59.5, 458.0], [59.6, 459.0], [59.7, 459.0], [59.8, 460.0], [59.9, 460.0], [60.0, 463.0], [60.1, 463.0], [60.2, 463.0], [60.3, 463.0], [60.4, 463.0], [60.5, 463.0], [60.6, 463.0], [60.7, 463.0], [60.8, 463.0], [60.9, 464.0], [61.0, 464.0], [61.1, 465.0], [61.2, 465.0], [61.3, 465.0], [61.4, 465.0], [61.5, 466.0], [61.6, 466.0], [61.7, 466.0], [61.8, 468.0], [61.9, 468.0], [62.0, 468.0], [62.1, 468.0], [62.2, 471.0], [62.3, 471.0], [62.4, 473.0], [62.5, 475.0], [62.6, 475.0], [62.7, 475.0], [62.8, 476.0], [62.9, 479.0], [63.0, 479.0], [63.1, 479.0], [63.2, 480.0], [63.3, 485.0], [63.4, 485.0], [63.5, 486.0], [63.6, 488.0], [63.7, 489.0], [63.8, 489.0], [63.9, 492.0], [64.0, 493.0], [64.1, 494.0], [64.2, 494.0], [64.3, 495.0], [64.4, 499.0], [64.5, 500.0], [64.6, 500.0], [64.7, 500.0], [64.8, 503.0], [64.9, 505.0], [65.0, 505.0], [65.1, 507.0], [65.2, 509.0], [65.3, 509.0], [65.4, 509.0], [65.5, 509.0], [65.6, 510.0], [65.7, 510.0], [65.8, 512.0], [65.9, 513.0], [66.0, 514.0], [66.1, 514.0], [66.2, 514.0], [66.3, 515.0], [66.4, 515.0], [66.5, 515.0], [66.6, 515.0], [66.7, 515.0], [66.8, 515.0], [66.9, 517.0], [67.0, 517.0], [67.1, 517.0], [67.2, 517.0], [67.3, 518.0], [67.4, 519.0], [67.5, 520.0], [67.6, 520.0], [67.7, 520.0], [67.8, 520.0], [67.9, 521.0], [68.0, 521.0], [68.1, 521.0], [68.2, 521.0], [68.3, 522.0], [68.4, 522.0], [68.5, 522.0], [68.6, 522.0], [68.7, 522.0], [68.8, 522.0], [68.9, 523.0], [69.0, 524.0], [69.1, 524.0], [69.2, 525.0], [69.3, 525.0], [69.4, 526.0], [69.5, 526.0], [69.6, 526.0], [69.7, 526.0], [69.8, 527.0], [69.9, 527.0], [70.0, 527.0], [70.1, 527.0], [70.2, 527.0], [70.3, 528.0], [70.4, 529.0], [70.5, 529.0], [70.6, 529.0], [70.7, 529.0], [70.8, 530.0], [70.9, 531.0], [71.0, 531.0], [71.1, 531.0], [71.2, 531.0], [71.3, 531.0], [71.4, 531.0], [71.5, 531.0], [71.6, 532.0], [71.7, 532.0], [71.8, 533.0], [71.9, 533.0], [72.0, 534.0], [72.1, 534.0], [72.2, 535.0], [72.3, 535.0], [72.4, 537.0], [72.5, 537.0], [72.6, 538.0], [72.7, 539.0], [72.8, 540.0], [72.9, 540.0], [73.0, 540.0], [73.1, 540.0], [73.2, 541.0], [73.3, 541.0], [73.4, 541.0], [73.5, 542.0], [73.6, 542.0], [73.7, 542.0], [73.8, 542.0], [73.9, 543.0], [74.0, 543.0], [74.1, 543.0], [74.2, 543.0], [74.3, 544.0], [74.4, 544.0], [74.5, 545.0], [74.6, 545.0], [74.7, 546.0], [74.8, 546.0], [74.9, 548.0], [75.0, 553.0], [75.1, 553.0], [75.2, 553.0], [75.3, 554.0], [75.4, 554.0], [75.5, 554.0], [75.6, 555.0], [75.7, 562.0], [75.8, 562.0], [75.9, 562.0], [76.0, 562.0], [76.1, 563.0], [76.2, 563.0], [76.3, 563.0], [76.4, 563.0], [76.5, 564.0], [76.6, 564.0], [76.7, 564.0], [76.8, 566.0], [76.9, 568.0], [77.0, 568.0], [77.1, 568.0], [77.2, 569.0], [77.3, 569.0], [77.4, 569.0], [77.5, 570.0], [77.6, 570.0], [77.7, 571.0], [77.8, 571.0], [77.9, 573.0], [78.0, 577.0], [78.1, 578.0], [78.2, 578.0], [78.3, 582.0], [78.4, 583.0], [78.5, 583.0], [78.6, 583.0], [78.7, 584.0], [78.8, 585.0], [78.9, 585.0], [79.0, 585.0], [79.1, 586.0], [79.2, 587.0], [79.3, 587.0], [79.4, 589.0], [79.5, 593.0], [79.6, 594.0], [79.7, 594.0], [79.8, 596.0], [79.9, 602.0], [80.0, 603.0], [80.1, 603.0], [80.2, 604.0], [80.3, 605.0], [80.4, 605.0], [80.5, 606.0], [80.6, 606.0], [80.7, 607.0], [80.8, 607.0], [80.9, 607.0], [81.0, 610.0], [81.1, 610.0], [81.2, 610.0], [81.3, 610.0], [81.4, 611.0], [81.5, 613.0], [81.6, 613.0], [81.7, 613.0], [81.8, 613.0], [81.9, 613.0], [82.0, 614.0], [82.1, 617.0], [82.2, 618.0], [82.3, 618.0], [82.4, 619.0], [82.5, 620.0], [82.6, 621.0], [82.7, 621.0], [82.8, 623.0], [82.9, 625.0], [83.0, 626.0], [83.1, 626.0], [83.2, 628.0], [83.3, 629.0], [83.4, 629.0], [83.5, 630.0], [83.6, 630.0], [83.7, 633.0], [83.8, 633.0], [83.9, 635.0], [84.0, 638.0], [84.1, 638.0], [84.2, 638.0], [84.3, 640.0], [84.4, 640.0], [84.5, 640.0], [84.6, 640.0], [84.7, 642.0], [84.8, 642.0], [84.9, 644.0], [85.0, 644.0], [85.1, 644.0], [85.2, 646.0], [85.3, 646.0], [85.4, 646.0], [85.5, 647.0], [85.6, 647.0], [85.7, 647.0], [85.8, 648.0], [85.9, 649.0], [86.0, 649.0], [86.1, 649.0], [86.2, 650.0], [86.3, 650.0], [86.4, 650.0], [86.5, 650.0], [86.6, 652.0], [86.7, 652.0], [86.8, 652.0], [86.9, 653.0], [87.0, 654.0], [87.1, 655.0], [87.2, 655.0], [87.3, 658.0], [87.4, 660.0], [87.5, 662.0], [87.6, 662.0], [87.7, 666.0], [87.8, 667.0], [87.9, 668.0], [88.0, 668.0], [88.1, 668.0], [88.2, 670.0], [88.3, 673.0], [88.4, 673.0], [88.5, 678.0], [88.6, 679.0], [88.7, 679.0], [88.8, 680.0], [88.9, 681.0], [89.0, 682.0], [89.1, 682.0], [89.2, 684.0], [89.3, 686.0], [89.4, 692.0], [89.5, 692.0], [89.6, 692.0], [89.7, 696.0], [89.8, 696.0], [89.9, 696.0], [90.0, 697.0], [90.1, 699.0], [90.2, 699.0], [90.3, 701.0], [90.4, 701.0], [90.5, 703.0], [90.6, 703.0], [90.7, 707.0], [90.8, 709.0], [90.9, 712.0], [91.0, 712.0], [91.1, 713.0], [91.2, 716.0], [91.3, 717.0], [91.4, 717.0], [91.5, 718.0], [91.6, 722.0], [91.7, 722.0], [91.8, 723.0], [91.9, 726.0], [92.0, 728.0], [92.1, 728.0], [92.2, 730.0], [92.3, 730.0], [92.4, 732.0], [92.5, 732.0], [92.6, 735.0], [92.7, 737.0], [92.8, 743.0], [92.9, 743.0], [93.0, 744.0], [93.1, 749.0], [93.2, 754.0], [93.3, 754.0], [93.4, 755.0], [93.5, 756.0], [93.6, 756.0], [93.7, 757.0], [93.8, 767.0], [93.9, 775.0], [94.0, 775.0], [94.1, 782.0], [94.2, 794.0], [94.3, 804.0], [94.4, 804.0], [94.5, 807.0], [94.6, 812.0], [94.7, 817.0], [94.8, 817.0], [94.9, 820.0], [95.0, 821.0], [95.1, 821.0], [95.2, 822.0], [95.3, 822.0], [95.4, 837.0], [95.5, 837.0], [95.6, 842.0], [95.7, 848.0], [95.8, 853.0], [95.9, 853.0], [96.0, 870.0], [96.1, 885.0], [96.2, 891.0], [96.3, 891.0], [96.4, 915.0], [96.5, 915.0], [96.6, 917.0], [96.7, 917.0], [96.8, 917.0], [96.9, 922.0], [97.0, 922.0], [97.1, 939.0], [97.2, 943.0], [97.3, 953.0], [97.4, 953.0], [97.5, 954.0], [97.6, 975.0], [97.7, 992.0], [97.8, 992.0], [97.9, 1010.0], [98.0, 1061.0], [98.1, 1087.0], [98.2, 1087.0], [98.3, 1095.0], [98.4, 1134.0], [98.5, 1134.0], [98.6, 1163.0], [98.7, 1191.0], [98.8, 1215.0], [98.9, 1215.0], [99.0, 1250.0], [99.1, 1294.0], [99.2, 1601.0], [99.3, 1601.0], [99.4, 1630.0], [99.5, 1634.0], [99.6, 2403.0], [99.7, 2403.0], [99.8, 2714.0], [99.9, 2732.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 167.0, "series": [{"data": [[2400.0, 1.0], [600.0, 76.0], [2700.0, 2.0], [700.0, 30.0], [200.0, 167.0], [800.0, 15.0], [900.0, 11.0], [1000.0, 4.0], [1100.0, 3.0], [1200.0, 3.0], [300.0, 161.0], [100.0, 26.0], [400.0, 120.0], [1600.0, 3.0], [500.0, 113.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 476.0, "series": [{"data": [[0.0, 476.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 253.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60263444E12, "maxY": 1.0, "series": [{"data": [[1.60263456E12, 1.0], [1.60263474E12, 1.0], [1.60263444E12, 1.0], [1.60263462E12, 1.0], [1.6026345E12, 1.0], [1.60263468E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263474E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 462.37959183673485, "minX": 1.0, "maxY": 462.37959183673485, "series": [{"data": [[1.0, 462.37959183673485]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 462.37959183673485]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 658.4333333333333, "minX": 1.60263444E12, "maxY": 352304.4666666667, "series": [{"data": [[1.60263456E12, 287736.76666666666], [1.60263474E12, 292356.75], [1.60263444E12, 335972.0], [1.60263462E12, 352304.4666666667], [1.6026345E12, 286757.45], [1.60263468E12, 280648.6666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60263456E12, 1062.55], [1.60263474E12, 1050.5666666666666], [1.60263444E12, 658.4333333333333], [1.60263462E12, 1003.4833333333333], [1.6026345E12, 855.3666666666667], [1.60263468E12, 892.6333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263474E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 403.95035460992887, "minX": 1.60263444E12, "maxY": 534.566371681416, "series": [{"data": [[1.60263456E12, 420.9859154929578], [1.60263474E12, 403.95035460992887], [1.60263444E12, 493.10344827586204], [1.60263462E12, 445.9776119402985], [1.6026345E12, 534.566371681416], [1.60263468E12, 508.8559322033897]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263474E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 403.03546099290776, "minX": 1.60263444E12, "maxY": 533.3451327433627, "series": [{"data": [[1.60263456E12, 419.9929577464789], [1.60263474E12, 403.03546099290776], [1.60263444E12, 491.86206896551715], [1.60263462E12, 444.76865671641787], [1.6026345E12, 533.3451327433627], [1.60263468E12, 507.8050847457628]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263474E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016949152542372885, "minX": 1.60263444E12, "maxY": 0.35632183908045956, "series": [{"data": [[1.60263456E12, 0.028169014084507064], [1.60263474E12, 0.028368794326241148], [1.60263444E12, 0.35632183908045956], [1.60263462E12, 0.02238805970149255], [1.6026345E12, 0.0265486725663717], [1.60263468E12, 0.016949152542372885]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263474E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 159.0, "minX": 1.60263444E12, "maxY": 2732.0, "series": [{"data": [[1.60263456E12, 1601.0], [1.60263474E12, 1634.0], [1.60263444E12, 2714.0], [1.60263462E12, 2732.0], [1.6026345E12, 954.0], [1.60263468E12, 775.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60263456E12, 172.0], [1.60263474E12, 177.16999949216842], [1.60263444E12, 183.0], [1.60263462E12, 161.14999967813492], [1.6026345E12, 347.2339997553825], [1.60263468E12, 265.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60263456E12, 172.0], [1.60263474E12, 179.08700020313262], [1.60263444E12, 183.0], [1.60263462E12, 162.36500012874603], [1.6026345E12, 348.15740009784696], [1.60263468E12, 265.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60263456E12, 172.0], [1.60263474E12, 178.2349997460842], [1.60263444E12, 183.0], [1.60263462E12, 161.82499983906746], [1.6026345E12, 347.7469998776913], [1.60263468E12, 265.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60263456E12, 172.0], [1.60263474E12, 173.0], [1.60263444E12, 183.0], [1.60263462E12, 159.0], [1.6026345E12, 347.0], [1.60263468E12, 265.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60263456E12, 388.0], [1.60263474E12, 293.0], [1.60263444E12, 386.0], [1.60263462E12, 386.0], [1.6026345E12, 500.0], [1.60263468E12, 515.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263474E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 183.0, "minX": 1.0, "maxY": 652.0, "series": [{"data": [[1.0, 652.0], [4.0, 276.0], [2.0, 501.5], [5.0, 183.0], [3.0, 375.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 183.0, "minX": 1.0, "maxY": 649.0, "series": [{"data": [[1.0, 649.0], [4.0, 275.5], [2.0, 500.5], [5.0, 183.0], [3.0, 374.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.4666666666666666, "minX": 1.60263444E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60263456E12, 2.3666666666666667], [1.60263474E12, 2.3333333333333335], [1.60263444E12, 1.4666666666666666], [1.60263462E12, 2.2333333333333334], [1.6026345E12, 1.8833333333333333], [1.60263468E12, 1.9666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263474E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60263444E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60263456E12, 2.3666666666666667], [1.60263474E12, 2.35], [1.60263444E12, 1.45], [1.60263462E12, 2.2333333333333334], [1.6026345E12, 1.8833333333333333], [1.60263468E12, 1.9666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60263474E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60263444E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60263456E12, 2.3666666666666667], [1.60263474E12, 2.35], [1.60263444E12, 1.45], [1.60263462E12, 2.2333333333333334], [1.6026345E12, 1.8833333333333333], [1.60263468E12, 1.9666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263474E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.60263444E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60263456E12, 2.3666666666666667], [1.60263474E12, 2.35], [1.60263444E12, 1.45], [1.60263462E12, 2.2333333333333334], [1.6026345E12, 1.8833333333333333], [1.60263468E12, 1.9666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60263474E12, "title": "Total Transactions Per Second"}},
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

