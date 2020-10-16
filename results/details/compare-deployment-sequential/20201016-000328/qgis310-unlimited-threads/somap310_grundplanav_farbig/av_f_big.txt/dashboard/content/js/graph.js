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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 2778.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 182.0], [0.3, 184.0], [0.4, 184.0], [0.5, 185.0], [0.6, 185.0], [0.7, 187.0], [0.8, 187.0], [0.9, 187.0], [1.0, 187.0], [1.1, 187.0], [1.2, 187.0], [1.3, 193.0], [1.4, 193.0], [1.5, 193.0], [1.6, 193.0], [1.7, 193.0], [1.8, 194.0], [1.9, 194.0], [2.0, 195.0], [2.1, 195.0], [2.2, 195.0], [2.3, 195.0], [2.4, 197.0], [2.5, 197.0], [2.6, 198.0], [2.7, 198.0], [2.8, 198.0], [2.9, 198.0], [3.0, 198.0], [3.1, 198.0], [3.2, 199.0], [3.3, 199.0], [3.4, 199.0], [3.5, 199.0], [3.6, 200.0], [3.7, 200.0], [3.8, 200.0], [3.9, 201.0], [4.0, 202.0], [4.1, 203.0], [4.2, 203.0], [4.3, 204.0], [4.4, 204.0], [4.5, 204.0], [4.6, 204.0], [4.7, 205.0], [4.8, 206.0], [4.9, 206.0], [5.0, 206.0], [5.1, 206.0], [5.2, 206.0], [5.3, 206.0], [5.4, 207.0], [5.5, 208.0], [5.6, 208.0], [5.7, 208.0], [5.8, 210.0], [5.9, 211.0], [6.0, 213.0], [6.1, 213.0], [6.2, 214.0], [6.3, 215.0], [6.4, 217.0], [6.5, 217.0], [6.6, 217.0], [6.7, 217.0], [6.8, 217.0], [6.9, 219.0], [7.0, 220.0], [7.1, 222.0], [7.2, 222.0], [7.3, 224.0], [7.4, 225.0], [7.5, 234.0], [7.6, 234.0], [7.7, 235.0], [7.8, 236.0], [7.9, 237.0], [8.0, 237.0], [8.1, 238.0], [8.2, 240.0], [8.3, 241.0], [8.4, 241.0], [8.5, 241.0], [8.6, 244.0], [8.7, 244.0], [8.8, 244.0], [8.9, 245.0], [9.0, 246.0], [9.1, 246.0], [9.2, 247.0], [9.3, 247.0], [9.4, 248.0], [9.5, 248.0], [9.6, 248.0], [9.7, 248.0], [9.8, 249.0], [9.9, 249.0], [10.0, 249.0], [10.1, 250.0], [10.2, 250.0], [10.3, 250.0], [10.4, 250.0], [10.5, 250.0], [10.6, 250.0], [10.7, 251.0], [10.8, 251.0], [10.9, 251.0], [11.0, 251.0], [11.1, 252.0], [11.2, 253.0], [11.3, 253.0], [11.4, 253.0], [11.5, 254.0], [11.6, 254.0], [11.7, 254.0], [11.8, 254.0], [11.9, 255.0], [12.0, 255.0], [12.1, 255.0], [12.2, 256.0], [12.3, 256.0], [12.4, 256.0], [12.5, 256.0], [12.6, 257.0], [12.7, 258.0], [12.8, 258.0], [12.9, 258.0], [13.0, 258.0], [13.1, 258.0], [13.2, 259.0], [13.3, 259.0], [13.4, 259.0], [13.5, 259.0], [13.6, 259.0], [13.7, 259.0], [13.8, 259.0], [13.9, 260.0], [14.0, 260.0], [14.1, 260.0], [14.2, 261.0], [14.3, 261.0], [14.4, 261.0], [14.5, 261.0], [14.6, 262.0], [14.7, 262.0], [14.8, 262.0], [14.9, 262.0], [15.0, 262.0], [15.1, 262.0], [15.2, 263.0], [15.3, 263.0], [15.4, 263.0], [15.5, 263.0], [15.6, 263.0], [15.7, 263.0], [15.8, 264.0], [15.9, 264.0], [16.0, 264.0], [16.1, 265.0], [16.2, 265.0], [16.3, 265.0], [16.4, 265.0], [16.5, 266.0], [16.6, 266.0], [16.7, 266.0], [16.8, 267.0], [16.9, 267.0], [17.0, 267.0], [17.1, 267.0], [17.2, 267.0], [17.3, 267.0], [17.4, 267.0], [17.5, 267.0], [17.6, 267.0], [17.7, 268.0], [17.8, 268.0], [17.9, 268.0], [18.0, 268.0], [18.1, 268.0], [18.2, 268.0], [18.3, 268.0], [18.4, 268.0], [18.5, 268.0], [18.6, 268.0], [18.7, 269.0], [18.8, 269.0], [18.9, 269.0], [19.0, 269.0], [19.1, 269.0], [19.2, 269.0], [19.3, 269.0], [19.4, 269.0], [19.5, 269.0], [19.6, 269.0], [19.7, 269.0], [19.8, 270.0], [19.9, 270.0], [20.0, 270.0], [20.1, 270.0], [20.2, 271.0], [20.3, 272.0], [20.4, 272.0], [20.5, 272.0], [20.6, 273.0], [20.7, 273.0], [20.8, 273.0], [20.9, 273.0], [21.0, 273.0], [21.1, 274.0], [21.2, 274.0], [21.3, 274.0], [21.4, 274.0], [21.5, 274.0], [21.6, 274.0], [21.7, 274.0], [21.8, 274.0], [21.9, 274.0], [22.0, 275.0], [22.1, 275.0], [22.2, 276.0], [22.3, 276.0], [22.4, 276.0], [22.5, 276.0], [22.6, 276.0], [22.7, 276.0], [22.8, 276.0], [22.9, 276.0], [23.0, 276.0], [23.1, 276.0], [23.2, 277.0], [23.3, 277.0], [23.4, 277.0], [23.5, 277.0], [23.6, 278.0], [23.7, 278.0], [23.8, 278.0], [23.9, 278.0], [24.0, 278.0], [24.1, 279.0], [24.2, 279.0], [24.3, 279.0], [24.4, 279.0], [24.5, 279.0], [24.6, 279.0], [24.7, 279.0], [24.8, 279.0], [24.9, 279.0], [25.0, 279.0], [25.1, 280.0], [25.2, 280.0], [25.3, 280.0], [25.4, 281.0], [25.5, 282.0], [25.6, 283.0], [25.7, 283.0], [25.8, 284.0], [25.9, 284.0], [26.0, 285.0], [26.1, 285.0], [26.2, 285.0], [26.3, 285.0], [26.4, 287.0], [26.5, 287.0], [26.6, 287.0], [26.7, 287.0], [26.8, 287.0], [26.9, 288.0], [27.0, 288.0], [27.1, 288.0], [27.2, 288.0], [27.3, 289.0], [27.4, 291.0], [27.5, 293.0], [27.6, 293.0], [27.7, 294.0], [27.8, 295.0], [27.9, 295.0], [28.0, 295.0], [28.1, 296.0], [28.2, 304.0], [28.3, 307.0], [28.4, 307.0], [28.5, 310.0], [28.6, 313.0], [28.7, 313.0], [28.8, 313.0], [28.9, 314.0], [29.0, 315.0], [29.1, 315.0], [29.2, 316.0], [29.3, 316.0], [29.4, 322.0], [29.5, 322.0], [29.6, 323.0], [29.7, 323.0], [29.8, 325.0], [29.9, 325.0], [30.0, 326.0], [30.1, 331.0], [30.2, 331.0], [30.3, 332.0], [30.4, 332.0], [30.5, 333.0], [30.6, 333.0], [30.7, 334.0], [30.8, 339.0], [30.9, 341.0], [31.0, 341.0], [31.1, 341.0], [31.2, 341.0], [31.3, 342.0], [31.4, 342.0], [31.5, 342.0], [31.6, 342.0], [31.7, 342.0], [31.8, 343.0], [31.9, 343.0], [32.0, 344.0], [32.1, 344.0], [32.2, 347.0], [32.3, 348.0], [32.4, 348.0], [32.5, 348.0], [32.6, 349.0], [32.7, 350.0], [32.8, 351.0], [32.9, 351.0], [33.0, 352.0], [33.1, 352.0], [33.2, 353.0], [33.3, 353.0], [33.4, 353.0], [33.5, 353.0], [33.6, 353.0], [33.7, 353.0], [33.8, 353.0], [33.9, 354.0], [34.0, 354.0], [34.1, 354.0], [34.2, 354.0], [34.3, 355.0], [34.4, 355.0], [34.5, 355.0], [34.6, 355.0], [34.7, 355.0], [34.8, 355.0], [34.9, 355.0], [35.0, 355.0], [35.1, 355.0], [35.2, 356.0], [35.3, 356.0], [35.4, 356.0], [35.5, 356.0], [35.6, 357.0], [35.7, 357.0], [35.8, 357.0], [35.9, 357.0], [36.0, 357.0], [36.1, 358.0], [36.2, 358.0], [36.3, 358.0], [36.4, 358.0], [36.5, 358.0], [36.6, 359.0], [36.7, 359.0], [36.8, 359.0], [36.9, 359.0], [37.0, 359.0], [37.1, 359.0], [37.2, 359.0], [37.3, 359.0], [37.4, 359.0], [37.5, 359.0], [37.6, 360.0], [37.7, 360.0], [37.8, 360.0], [37.9, 360.0], [38.0, 361.0], [38.1, 361.0], [38.2, 361.0], [38.3, 361.0], [38.4, 361.0], [38.5, 361.0], [38.6, 361.0], [38.7, 361.0], [38.8, 361.0], [38.9, 361.0], [39.0, 362.0], [39.1, 362.0], [39.2, 362.0], [39.3, 362.0], [39.4, 362.0], [39.5, 362.0], [39.6, 363.0], [39.7, 363.0], [39.8, 363.0], [39.9, 363.0], [40.0, 363.0], [40.1, 363.0], [40.2, 363.0], [40.3, 363.0], [40.4, 363.0], [40.5, 363.0], [40.6, 364.0], [40.7, 364.0], [40.8, 364.0], [40.9, 364.0], [41.0, 364.0], [41.1, 364.0], [41.2, 364.0], [41.3, 364.0], [41.4, 365.0], [41.5, 365.0], [41.6, 365.0], [41.7, 365.0], [41.8, 365.0], [41.9, 365.0], [42.0, 366.0], [42.1, 366.0], [42.2, 366.0], [42.3, 366.0], [42.4, 366.0], [42.5, 367.0], [42.6, 367.0], [42.7, 367.0], [42.8, 367.0], [42.9, 367.0], [43.0, 367.0], [43.1, 367.0], [43.2, 367.0], [43.3, 368.0], [43.4, 368.0], [43.5, 368.0], [43.6, 368.0], [43.7, 368.0], [43.8, 368.0], [43.9, 369.0], [44.0, 369.0], [44.1, 369.0], [44.2, 369.0], [44.3, 369.0], [44.4, 369.0], [44.5, 369.0], [44.6, 369.0], [44.7, 370.0], [44.8, 370.0], [44.9, 370.0], [45.0, 370.0], [45.1, 370.0], [45.2, 370.0], [45.3, 370.0], [45.4, 370.0], [45.5, 370.0], [45.6, 370.0], [45.7, 370.0], [45.8, 371.0], [45.9, 371.0], [46.0, 371.0], [46.1, 371.0], [46.2, 371.0], [46.3, 371.0], [46.4, 371.0], [46.5, 371.0], [46.6, 372.0], [46.7, 373.0], [46.8, 373.0], [46.9, 373.0], [47.0, 373.0], [47.1, 373.0], [47.2, 373.0], [47.3, 374.0], [47.4, 374.0], [47.5, 374.0], [47.6, 374.0], [47.7, 374.0], [47.8, 374.0], [47.9, 374.0], [48.0, 374.0], [48.1, 374.0], [48.2, 375.0], [48.3, 376.0], [48.4, 376.0], [48.5, 376.0], [48.6, 376.0], [48.7, 376.0], [48.8, 377.0], [48.9, 377.0], [49.0, 378.0], [49.1, 378.0], [49.2, 378.0], [49.3, 378.0], [49.4, 379.0], [49.5, 379.0], [49.6, 381.0], [49.7, 381.0], [49.8, 382.0], [49.9, 382.0], [50.0, 382.0], [50.1, 383.0], [50.2, 383.0], [50.3, 383.0], [50.4, 384.0], [50.5, 386.0], [50.6, 386.0], [50.7, 386.0], [50.8, 386.0], [50.9, 386.0], [51.0, 386.0], [51.1, 387.0], [51.2, 388.0], [51.3, 390.0], [51.4, 390.0], [51.5, 390.0], [51.6, 390.0], [51.7, 390.0], [51.8, 390.0], [51.9, 390.0], [52.0, 393.0], [52.1, 393.0], [52.2, 393.0], [52.3, 395.0], [52.4, 399.0], [52.5, 399.0], [52.6, 399.0], [52.7, 400.0], [52.8, 400.0], [52.9, 400.0], [53.0, 400.0], [53.1, 401.0], [53.2, 401.0], [53.3, 401.0], [53.4, 401.0], [53.5, 402.0], [53.6, 402.0], [53.7, 404.0], [53.8, 405.0], [53.9, 405.0], [54.0, 405.0], [54.1, 406.0], [54.2, 407.0], [54.3, 409.0], [54.4, 409.0], [54.5, 409.0], [54.6, 409.0], [54.7, 410.0], [54.8, 410.0], [54.9, 413.0], [55.0, 413.0], [55.1, 413.0], [55.2, 414.0], [55.3, 414.0], [55.4, 415.0], [55.5, 415.0], [55.6, 415.0], [55.7, 415.0], [55.8, 415.0], [55.9, 415.0], [56.0, 415.0], [56.1, 416.0], [56.2, 417.0], [56.3, 417.0], [56.4, 420.0], [56.5, 420.0], [56.6, 420.0], [56.7, 420.0], [56.8, 421.0], [56.9, 421.0], [57.0, 421.0], [57.1, 421.0], [57.2, 422.0], [57.3, 423.0], [57.4, 423.0], [57.5, 423.0], [57.6, 423.0], [57.7, 423.0], [57.8, 423.0], [57.9, 425.0], [58.0, 425.0], [58.1, 425.0], [58.2, 425.0], [58.3, 426.0], [58.4, 428.0], [58.5, 428.0], [58.6, 428.0], [58.7, 429.0], [58.8, 429.0], [58.9, 429.0], [59.0, 430.0], [59.1, 433.0], [59.2, 433.0], [59.3, 433.0], [59.4, 433.0], [59.5, 434.0], [59.6, 434.0], [59.7, 434.0], [59.8, 434.0], [59.9, 434.0], [60.0, 434.0], [60.1, 434.0], [60.2, 435.0], [60.3, 436.0], [60.4, 436.0], [60.5, 436.0], [60.6, 437.0], [60.7, 438.0], [60.8, 438.0], [60.9, 441.0], [61.0, 441.0], [61.1, 442.0], [61.2, 442.0], [61.3, 442.0], [61.4, 443.0], [61.5, 444.0], [61.6, 444.0], [61.7, 444.0], [61.8, 444.0], [61.9, 444.0], [62.0, 446.0], [62.1, 448.0], [62.2, 451.0], [62.3, 451.0], [62.4, 453.0], [62.5, 459.0], [62.6, 459.0], [62.7, 459.0], [62.8, 462.0], [62.9, 464.0], [63.0, 464.0], [63.1, 464.0], [63.2, 465.0], [63.3, 465.0], [63.4, 465.0], [63.5, 466.0], [63.6, 467.0], [63.7, 473.0], [63.8, 473.0], [63.9, 473.0], [64.0, 481.0], [64.1, 482.0], [64.2, 482.0], [64.3, 484.0], [64.4, 484.0], [64.5, 486.0], [64.6, 486.0], [64.7, 487.0], [64.8, 492.0], [64.9, 492.0], [65.0, 492.0], [65.1, 493.0], [65.2, 493.0], [65.3, 493.0], [65.4, 493.0], [65.5, 495.0], [65.6, 497.0], [65.7, 497.0], [65.8, 499.0], [65.9, 500.0], [66.0, 500.0], [66.1, 500.0], [66.2, 501.0], [66.3, 501.0], [66.4, 502.0], [66.5, 502.0], [66.6, 502.0], [66.7, 503.0], [66.8, 503.0], [66.9, 503.0], [67.0, 505.0], [67.1, 506.0], [67.2, 506.0], [67.3, 506.0], [67.4, 506.0], [67.5, 507.0], [67.6, 507.0], [67.7, 508.0], [67.8, 508.0], [67.9, 508.0], [68.0, 508.0], [68.1, 508.0], [68.2, 509.0], [68.3, 509.0], [68.4, 509.0], [68.5, 510.0], [68.6, 510.0], [68.7, 510.0], [68.8, 511.0], [68.9, 511.0], [69.0, 512.0], [69.1, 512.0], [69.2, 512.0], [69.3, 513.0], [69.4, 514.0], [69.5, 514.0], [69.6, 514.0], [69.7, 514.0], [69.8, 514.0], [69.9, 514.0], [70.0, 514.0], [70.1, 516.0], [70.2, 516.0], [70.3, 516.0], [70.4, 517.0], [70.5, 518.0], [70.6, 518.0], [70.7, 518.0], [70.8, 519.0], [70.9, 519.0], [71.0, 519.0], [71.1, 519.0], [71.2, 520.0], [71.3, 521.0], [71.4, 521.0], [71.5, 522.0], [71.6, 523.0], [71.7, 523.0], [71.8, 526.0], [71.9, 526.0], [72.0, 527.0], [72.1, 527.0], [72.2, 527.0], [72.3, 528.0], [72.4, 529.0], [72.5, 529.0], [72.6, 533.0], [72.7, 533.0], [72.8, 533.0], [72.9, 533.0], [73.0, 534.0], [73.1, 534.0], [73.2, 535.0], [73.3, 535.0], [73.4, 535.0], [73.5, 535.0], [73.6, 535.0], [73.7, 537.0], [73.8, 537.0], [73.9, 538.0], [74.0, 538.0], [74.1, 538.0], [74.2, 539.0], [74.3, 540.0], [74.4, 540.0], [74.5, 542.0], [74.6, 543.0], [74.7, 543.0], [74.8, 543.0], [74.9, 544.0], [75.0, 544.0], [75.1, 544.0], [75.2, 547.0], [75.3, 547.0], [75.4, 549.0], [75.5, 549.0], [75.6, 549.0], [75.7, 551.0], [75.8, 551.0], [75.9, 551.0], [76.0, 553.0], [76.1, 555.0], [76.2, 556.0], [76.3, 556.0], [76.4, 557.0], [76.5, 558.0], [76.6, 559.0], [76.7, 559.0], [76.8, 560.0], [76.9, 562.0], [77.0, 562.0], [77.1, 562.0], [77.2, 563.0], [77.3, 563.0], [77.4, 563.0], [77.5, 566.0], [77.6, 566.0], [77.7, 566.0], [77.8, 566.0], [77.9, 568.0], [78.0, 569.0], [78.1, 569.0], [78.2, 569.0], [78.3, 569.0], [78.4, 571.0], [78.5, 571.0], [78.6, 573.0], [78.7, 574.0], [78.8, 574.0], [78.9, 574.0], [79.0, 576.0], [79.1, 576.0], [79.2, 578.0], [79.3, 578.0], [79.4, 579.0], [79.5, 579.0], [79.6, 579.0], [79.7, 579.0], [79.8, 580.0], [79.9, 580.0], [80.0, 581.0], [80.1, 581.0], [80.2, 582.0], [80.3, 583.0], [80.4, 583.0], [80.5, 586.0], [80.6, 587.0], [80.7, 587.0], [80.8, 587.0], [80.9, 589.0], [81.0, 593.0], [81.1, 595.0], [81.2, 595.0], [81.3, 597.0], [81.4, 599.0], [81.5, 600.0], [81.6, 600.0], [81.7, 601.0], [81.8, 604.0], [81.9, 604.0], [82.0, 604.0], [82.1, 606.0], [82.2, 609.0], [82.3, 609.0], [82.4, 609.0], [82.5, 609.0], [82.6, 610.0], [82.7, 610.0], [82.8, 611.0], [82.9, 615.0], [83.0, 616.0], [83.1, 616.0], [83.2, 617.0], [83.3, 617.0], [83.4, 617.0], [83.5, 618.0], [83.6, 618.0], [83.7, 618.0], [83.8, 618.0], [83.9, 619.0], [84.0, 622.0], [84.1, 623.0], [84.2, 623.0], [84.3, 625.0], [84.4, 627.0], [84.5, 628.0], [84.6, 628.0], [84.7, 628.0], [84.8, 629.0], [84.9, 629.0], [85.0, 629.0], [85.1, 629.0], [85.2, 631.0], [85.3, 631.0], [85.4, 632.0], [85.5, 636.0], [85.6, 636.0], [85.7, 636.0], [85.8, 637.0], [85.9, 638.0], [86.0, 640.0], [86.1, 640.0], [86.2, 640.0], [86.3, 641.0], [86.4, 641.0], [86.5, 641.0], [86.6, 641.0], [86.7, 642.0], [86.8, 642.0], [86.9, 643.0], [87.0, 643.0], [87.1, 645.0], [87.2, 645.0], [87.3, 645.0], [87.4, 646.0], [87.5, 651.0], [87.6, 651.0], [87.7, 651.0], [87.8, 653.0], [87.9, 657.0], [88.0, 657.0], [88.1, 661.0], [88.2, 662.0], [88.3, 663.0], [88.4, 663.0], [88.5, 671.0], [88.6, 672.0], [88.7, 672.0], [88.8, 673.0], [88.9, 675.0], [89.0, 675.0], [89.1, 675.0], [89.2, 678.0], [89.3, 680.0], [89.4, 686.0], [89.5, 686.0], [89.6, 687.0], [89.7, 688.0], [89.8, 688.0], [89.9, 688.0], [90.0, 689.0], [90.1, 689.0], [90.2, 689.0], [90.3, 692.0], [90.4, 693.0], [90.5, 695.0], [90.6, 695.0], [90.7, 695.0], [90.8, 699.0], [90.9, 700.0], [91.0, 700.0], [91.1, 700.0], [91.2, 701.0], [91.3, 707.0], [91.4, 707.0], [91.5, 711.0], [91.6, 711.0], [91.7, 711.0], [91.8, 713.0], [91.9, 714.0], [92.0, 715.0], [92.1, 715.0], [92.2, 715.0], [92.3, 716.0], [92.4, 716.0], [92.5, 716.0], [92.6, 719.0], [92.7, 722.0], [92.8, 730.0], [92.9, 730.0], [93.0, 738.0], [93.1, 742.0], [93.2, 742.0], [93.3, 742.0], [93.4, 762.0], [93.5, 766.0], [93.6, 766.0], [93.7, 776.0], [93.8, 779.0], [93.9, 783.0], [94.0, 783.0], [94.1, 790.0], [94.2, 790.0], [94.3, 812.0], [94.4, 812.0], [94.5, 817.0], [94.6, 822.0], [94.7, 827.0], [94.8, 827.0], [94.9, 830.0], [95.0, 844.0], [95.1, 844.0], [95.2, 861.0], [95.3, 863.0], [95.4, 873.0], [95.5, 873.0], [95.6, 875.0], [95.7, 879.0], [95.8, 882.0], [95.9, 882.0], [96.0, 884.0], [96.1, 891.0], [96.2, 914.0], [96.3, 914.0], [96.4, 915.0], [96.5, 927.0], [96.6, 939.0], [96.7, 939.0], [96.8, 944.0], [96.9, 958.0], [97.0, 958.0], [97.1, 970.0], [97.2, 973.0], [97.3, 981.0], [97.4, 981.0], [97.5, 991.0], [97.6, 1021.0], [97.7, 1080.0], [97.8, 1080.0], [97.9, 1086.0], [98.0, 1172.0], [98.1, 1180.0], [98.2, 1180.0], [98.3, 1193.0], [98.4, 1207.0], [98.5, 1207.0], [98.6, 1212.0], [98.7, 1253.0], [98.8, 1308.0], [98.9, 1308.0], [99.0, 1602.0], [99.1, 1660.0], [99.2, 1675.0], [99.3, 1675.0], [99.4, 2370.0], [99.5, 2582.0], [99.6, 2687.0], [99.7, 2687.0], [99.8, 2747.0], [99.9, 2778.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 181.0, "series": [{"data": [[2300.0, 1.0], [600.0, 69.0], [2500.0, 1.0], [2600.0, 1.0], [700.0, 25.0], [2700.0, 2.0], [200.0, 181.0], [800.0, 14.0], [900.0, 10.0], [1000.0, 3.0], [1100.0, 3.0], [300.0, 180.0], [1200.0, 3.0], [1300.0, 1.0], [100.0, 26.0], [400.0, 97.0], [1600.0, 3.0], [500.0, 115.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 486.0, "series": [{"data": [[0.0, 486.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 241.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60280802E12, "maxY": 1.0, "series": [{"data": [[1.60280826E12, 1.0], [1.60280808E12, 1.0], [1.60280814E12, 1.0], [1.60280802E12, 1.0], [1.60280832E12, 1.0], [1.60280838E12, 1.0], [1.6028082E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280838E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 456.25714285714326, "minX": 1.0, "maxY": 456.25714285714326, "series": [{"data": [[1.0, 456.25714285714326]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 456.25714285714326]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 121.16666666666667, "minX": 1.60280802E12, "maxY": 367161.5333333333, "series": [{"data": [[1.60280826E12, 301997.9166666667], [1.60280808E12, 367161.5333333333], [1.60280814E12, 268681.36666666664], [1.60280802E12, 101223.71666666666], [1.60280832E12, 264311.63333333336], [1.60280838E12, 167869.0], [1.6028082E12, 364501.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60280826E12, 933.75], [1.60280808E12, 916.3], [1.60280814E12, 914.3666666666667], [1.60280802E12, 121.16666666666667], [1.60280832E12, 1052.35], [1.60280838E12, 437.4166666666667], [1.6028082E12, 1147.6833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280838E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 384.2516129032259, "minX": 1.60280802E12, "maxY": 703.0625000000002, "series": [{"data": [[1.60280826E12, 489.2764227642278], [1.60280808E12, 492.2892561983471], [1.60280814E12, 494.65289256198326], [1.60280802E12, 703.0625000000002], [1.60280832E12, 429.27338129496394], [1.60280838E12, 421.1833333333334], [1.6028082E12, 384.2516129032259]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280838E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 383.2129032258066, "minX": 1.60280802E12, "maxY": 700.75, "series": [{"data": [[1.60280826E12, 488.2113821138213], [1.60280808E12, 491.1157024793389], [1.60280814E12, 493.43801652892546], [1.60280802E12, 700.75], [1.60280832E12, 428.4172661870504], [1.60280838E12, 419.8500000000001], [1.6028082E12, 383.2129032258066]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280838E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.016260162601626018, "minX": 1.60280802E12, "maxY": 2.0000000000000004, "series": [{"data": [[1.60280826E12, 0.016260162601626018], [1.60280808E12, 0.01652892561983471], [1.60280814E12, 0.06611570247933886], [1.60280802E12, 2.0000000000000004], [1.60280832E12, 0.021582733812949645], [1.60280838E12, 0.01666666666666667], [1.6028082E12, 0.02580645161290323]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280838E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60280802E12, "maxY": 2778.0, "series": [{"data": [[1.60280826E12, 1212.0], [1.60280808E12, 2747.0], [1.60280814E12, 2370.0], [1.60280802E12, 2687.0], [1.60280832E12, 1172.0], [1.60280838E12, 1660.0], [1.6028082E12, 2778.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60280826E12, 236.92799976348877], [1.60280808E12, 187.97999970912934], [1.60280814E12, 257.6659995055199], [1.60280802E12, 195.0], [1.60280832E12, 238.7799998998642], [1.60280838E12, 179.0], [1.6028082E12, 182.80799992561342]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60280826E12, 237.8208000946045], [1.60280808E12, 189.07800011634828], [1.60280814E12, 259.5326001977921], [1.60280802E12, 195.0], [1.60280832E12, 239.15800004005433], [1.60280838E12, 179.0], [1.6028082E12, 183.08880002975465]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60280826E12, 237.42399988174438], [1.60280808E12, 188.58999985456467], [1.60280814E12, 258.7029997527599], [1.60280802E12, 195.0], [1.60280832E12, 238.9899999499321], [1.60280838E12, 179.0], [1.6028082E12, 182.9639999628067]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60280826E12, 236.0], [1.60280808E12, 187.0], [1.60280814E12, 256.0], [1.60280802E12, 195.0], [1.60280832E12, 238.0], [1.60280838E12, 179.0], [1.6028082E12, 182.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60280826E12, 443.0], [1.60280808E12, 382.0], [1.60280814E12, 497.0], [1.60280802E12, 428.0], [1.60280832E12, 382.0], [1.60280838E12, 269.0], [1.6028082E12, 283.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280838E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 198.0, "minX": 1.0, "maxY": 641.5, "series": [{"data": [[2.0, 496.0], [4.0, 268.0], [1.0, 641.5], [5.0, 198.0], [3.0, 361.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 198.0, "minX": 1.0, "maxY": 640.5, "series": [{"data": [[2.0, 495.0], [4.0, 268.0], [1.0, 640.5], [5.0, 198.0], [3.0, 360.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2833333333333333, "minX": 1.60280802E12, "maxY": 2.5833333333333335, "series": [{"data": [[1.60280826E12, 2.05], [1.60280808E12, 2.0166666666666666], [1.60280814E12, 2.0166666666666666], [1.60280802E12, 0.2833333333333333], [1.60280832E12, 2.316666666666667], [1.60280838E12, 0.9833333333333333], [1.6028082E12, 2.5833333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280838E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60280802E12, "maxY": 2.5833333333333335, "series": [{"data": [[1.60280826E12, 2.05], [1.60280808E12, 2.0166666666666666], [1.60280814E12, 2.0166666666666666], [1.60280802E12, 0.26666666666666666], [1.60280832E12, 2.316666666666667], [1.60280838E12, 1.0], [1.6028082E12, 2.5833333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60280838E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60280802E12, "maxY": 2.5833333333333335, "series": [{"data": [[1.60280826E12, 2.05], [1.60280808E12, 2.0166666666666666], [1.60280814E12, 2.0166666666666666], [1.60280802E12, 0.26666666666666666], [1.60280832E12, 2.316666666666667], [1.60280838E12, 1.0], [1.6028082E12, 2.5833333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280838E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60280802E12, "maxY": 2.5833333333333335, "series": [{"data": [[1.60280826E12, 2.05], [1.60280808E12, 2.0166666666666666], [1.60280814E12, 2.0166666666666666], [1.60280802E12, 0.26666666666666666], [1.60280832E12, 2.316666666666667], [1.60280838E12, 1.0], [1.6028082E12, 2.5833333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60280838E12, "title": "Total Transactions Per Second"}},
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

