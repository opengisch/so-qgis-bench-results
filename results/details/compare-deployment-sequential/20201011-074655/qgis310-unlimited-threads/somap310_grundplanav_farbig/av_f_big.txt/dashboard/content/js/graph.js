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
        data: {"result": {"minY": 188.0, "minX": 0.0, "maxY": 2906.0, "series": [{"data": [[0.0, 188.0], [0.1, 188.0], [0.2, 188.0], [0.3, 190.0], [0.4, 190.0], [0.5, 192.0], [0.6, 193.0], [0.7, 193.0], [0.8, 193.0], [0.9, 193.0], [1.0, 195.0], [1.1, 195.0], [1.2, 195.0], [1.3, 196.0], [1.4, 197.0], [1.5, 198.0], [1.6, 198.0], [1.7, 200.0], [1.8, 203.0], [1.9, 203.0], [2.0, 205.0], [2.1, 205.0], [2.2, 206.0], [2.3, 206.0], [2.4, 206.0], [2.5, 207.0], [2.6, 208.0], [2.7, 208.0], [2.8, 208.0], [2.9, 209.0], [3.0, 210.0], [3.1, 210.0], [3.2, 210.0], [3.3, 211.0], [3.4, 211.0], [3.5, 212.0], [3.6, 212.0], [3.7, 213.0], [3.8, 213.0], [3.9, 214.0], [4.0, 214.0], [4.1, 215.0], [4.2, 215.0], [4.3, 215.0], [4.4, 217.0], [4.5, 219.0], [4.6, 219.0], [4.7, 219.0], [4.8, 220.0], [4.9, 220.0], [5.0, 220.0], [5.1, 221.0], [5.2, 222.0], [5.3, 222.0], [5.4, 222.0], [5.5, 222.0], [5.6, 223.0], [5.7, 223.0], [5.8, 224.0], [5.9, 225.0], [6.0, 228.0], [6.1, 228.0], [6.2, 229.0], [6.3, 233.0], [6.4, 233.0], [6.5, 233.0], [6.6, 235.0], [6.7, 235.0], [6.8, 235.0], [6.9, 236.0], [7.0, 238.0], [7.1, 239.0], [7.2, 239.0], [7.3, 242.0], [7.4, 242.0], [7.5, 243.0], [7.6, 243.0], [7.7, 243.0], [7.8, 245.0], [7.9, 245.0], [8.0, 245.0], [8.1, 246.0], [8.2, 247.0], [8.3, 247.0], [8.4, 247.0], [8.5, 248.0], [8.6, 249.0], [8.7, 249.0], [8.8, 250.0], [8.9, 250.0], [9.0, 251.0], [9.1, 251.0], [9.2, 252.0], [9.3, 252.0], [9.4, 255.0], [9.5, 255.0], [9.6, 256.0], [9.7, 256.0], [9.8, 257.0], [9.9, 257.0], [10.0, 258.0], [10.1, 259.0], [10.2, 259.0], [10.3, 259.0], [10.4, 260.0], [10.5, 260.0], [10.6, 260.0], [10.7, 260.0], [10.8, 260.0], [10.9, 261.0], [11.0, 261.0], [11.1, 261.0], [11.2, 262.0], [11.3, 263.0], [11.4, 263.0], [11.5, 263.0], [11.6, 264.0], [11.7, 264.0], [11.8, 264.0], [11.9, 265.0], [12.0, 265.0], [12.1, 265.0], [12.2, 265.0], [12.3, 266.0], [12.4, 266.0], [12.5, 266.0], [12.6, 267.0], [12.7, 267.0], [12.8, 267.0], [12.9, 267.0], [13.0, 267.0], [13.1, 268.0], [13.2, 268.0], [13.3, 268.0], [13.4, 268.0], [13.5, 268.0], [13.6, 268.0], [13.7, 268.0], [13.8, 268.0], [13.9, 268.0], [14.0, 268.0], [14.1, 268.0], [14.2, 269.0], [14.3, 269.0], [14.4, 269.0], [14.5, 270.0], [14.6, 270.0], [14.7, 270.0], [14.8, 270.0], [14.9, 270.0], [15.0, 271.0], [15.1, 271.0], [15.2, 271.0], [15.3, 271.0], [15.4, 271.0], [15.5, 271.0], [15.6, 271.0], [15.7, 272.0], [15.8, 272.0], [15.9, 272.0], [16.0, 272.0], [16.1, 272.0], [16.2, 272.0], [16.3, 272.0], [16.4, 273.0], [16.5, 273.0], [16.6, 273.0], [16.7, 273.0], [16.8, 274.0], [16.9, 274.0], [17.0, 274.0], [17.1, 274.0], [17.2, 275.0], [17.3, 275.0], [17.4, 275.0], [17.5, 275.0], [17.6, 275.0], [17.7, 276.0], [17.8, 276.0], [17.9, 276.0], [18.0, 276.0], [18.1, 276.0], [18.2, 276.0], [18.3, 276.0], [18.4, 277.0], [18.5, 277.0], [18.6, 277.0], [18.7, 277.0], [18.8, 277.0], [18.9, 277.0], [19.0, 278.0], [19.1, 278.0], [19.2, 280.0], [19.3, 280.0], [19.4, 280.0], [19.5, 280.0], [19.6, 280.0], [19.7, 280.0], [19.8, 280.0], [19.9, 280.0], [20.0, 280.0], [20.1, 281.0], [20.2, 281.0], [20.3, 281.0], [20.4, 281.0], [20.5, 281.0], [20.6, 283.0], [20.7, 283.0], [20.8, 283.0], [20.9, 284.0], [21.0, 285.0], [21.1, 285.0], [21.2, 285.0], [21.3, 285.0], [21.4, 286.0], [21.5, 286.0], [21.6, 286.0], [21.7, 286.0], [21.8, 287.0], [21.9, 287.0], [22.0, 288.0], [22.1, 288.0], [22.2, 289.0], [22.3, 289.0], [22.4, 289.0], [22.5, 289.0], [22.6, 289.0], [22.7, 289.0], [22.8, 289.0], [22.9, 290.0], [23.0, 290.0], [23.1, 290.0], [23.2, 291.0], [23.3, 292.0], [23.4, 292.0], [23.5, 292.0], [23.6, 292.0], [23.7, 292.0], [23.8, 292.0], [23.9, 292.0], [24.0, 293.0], [24.1, 293.0], [24.2, 293.0], [24.3, 293.0], [24.4, 293.0], [24.5, 294.0], [24.6, 294.0], [24.7, 294.0], [24.8, 295.0], [24.9, 296.0], [25.0, 296.0], [25.1, 298.0], [25.2, 298.0], [25.3, 298.0], [25.4, 298.0], [25.5, 298.0], [25.6, 301.0], [25.7, 301.0], [25.8, 303.0], [25.9, 304.0], [26.0, 305.0], [26.1, 305.0], [26.2, 305.0], [26.3, 305.0], [26.4, 305.0], [26.5, 305.0], [26.6, 305.0], [26.7, 305.0], [26.8, 305.0], [26.9, 305.0], [27.0, 309.0], [27.1, 311.0], [27.2, 311.0], [27.3, 312.0], [27.4, 313.0], [27.5, 313.0], [27.6, 313.0], [27.7, 317.0], [27.8, 318.0], [27.9, 321.0], [28.0, 321.0], [28.1, 323.0], [28.2, 324.0], [28.3, 326.0], [28.4, 326.0], [28.5, 330.0], [28.6, 331.0], [28.7, 331.0], [28.8, 331.0], [28.9, 332.0], [29.0, 334.0], [29.1, 334.0], [29.2, 334.0], [29.3, 335.0], [29.4, 337.0], [29.5, 337.0], [29.6, 340.0], [29.7, 342.0], [29.8, 343.0], [29.9, 343.0], [30.0, 344.0], [30.1, 344.0], [30.2, 344.0], [30.3, 346.0], [30.4, 348.0], [30.5, 349.0], [30.6, 349.0], [30.7, 349.0], [30.8, 350.0], [30.9, 352.0], [31.0, 352.0], [31.1, 352.0], [31.2, 354.0], [31.3, 354.0], [31.4, 354.0], [31.5, 355.0], [31.6, 355.0], [31.7, 355.0], [31.8, 355.0], [31.9, 356.0], [32.0, 356.0], [32.1, 356.0], [32.2, 357.0], [32.3, 357.0], [32.4, 358.0], [32.5, 358.0], [32.6, 358.0], [32.7, 359.0], [32.8, 359.0], [32.9, 359.0], [33.0, 359.0], [33.1, 360.0], [33.2, 360.0], [33.3, 360.0], [33.4, 360.0], [33.5, 362.0], [33.6, 362.0], [33.7, 362.0], [33.8, 362.0], [33.9, 363.0], [34.0, 363.0], [34.1, 364.0], [34.2, 364.0], [34.3, 364.0], [34.4, 364.0], [34.5, 364.0], [34.6, 365.0], [34.7, 365.0], [34.8, 365.0], [34.9, 366.0], [35.0, 366.0], [35.1, 366.0], [35.2, 366.0], [35.3, 366.0], [35.4, 366.0], [35.5, 366.0], [35.6, 366.0], [35.7, 366.0], [35.8, 366.0], [35.9, 366.0], [36.0, 367.0], [36.1, 369.0], [36.2, 369.0], [36.3, 369.0], [36.4, 369.0], [36.5, 369.0], [36.6, 369.0], [36.7, 369.0], [36.8, 369.0], [36.9, 370.0], [37.0, 370.0], [37.1, 370.0], [37.2, 370.0], [37.3, 370.0], [37.4, 370.0], [37.5, 371.0], [37.6, 371.0], [37.7, 371.0], [37.8, 371.0], [37.9, 371.0], [38.0, 371.0], [38.1, 371.0], [38.2, 371.0], [38.3, 371.0], [38.4, 372.0], [38.5, 372.0], [38.6, 372.0], [38.7, 372.0], [38.8, 372.0], [38.9, 372.0], [39.0, 372.0], [39.1, 372.0], [39.2, 372.0], [39.3, 372.0], [39.4, 372.0], [39.5, 373.0], [39.6, 373.0], [39.7, 373.0], [39.8, 373.0], [39.9, 373.0], [40.0, 373.0], [40.1, 374.0], [40.2, 374.0], [40.3, 374.0], [40.4, 374.0], [40.5, 375.0], [40.6, 375.0], [40.7, 375.0], [40.8, 375.0], [40.9, 376.0], [41.0, 376.0], [41.1, 376.0], [41.2, 376.0], [41.3, 377.0], [41.4, 377.0], [41.5, 378.0], [41.6, 378.0], [41.7, 378.0], [41.8, 378.0], [41.9, 378.0], [42.0, 378.0], [42.1, 378.0], [42.2, 379.0], [42.3, 379.0], [42.4, 379.0], [42.5, 379.0], [42.6, 379.0], [42.7, 379.0], [42.8, 380.0], [42.9, 381.0], [43.0, 381.0], [43.1, 381.0], [43.2, 381.0], [43.3, 381.0], [43.4, 381.0], [43.5, 381.0], [43.6, 382.0], [43.7, 382.0], [43.8, 382.0], [43.9, 382.0], [44.0, 382.0], [44.1, 383.0], [44.2, 383.0], [44.3, 383.0], [44.4, 384.0], [44.5, 384.0], [44.6, 384.0], [44.7, 384.0], [44.8, 384.0], [44.9, 384.0], [45.0, 384.0], [45.1, 384.0], [45.2, 385.0], [45.3, 385.0], [45.4, 385.0], [45.5, 386.0], [45.6, 386.0], [45.7, 386.0], [45.8, 386.0], [45.9, 387.0], [46.0, 387.0], [46.1, 387.0], [46.2, 387.0], [46.3, 388.0], [46.4, 389.0], [46.5, 389.0], [46.6, 389.0], [46.7, 390.0], [46.8, 390.0], [46.9, 390.0], [47.0, 390.0], [47.1, 390.0], [47.2, 390.0], [47.3, 391.0], [47.4, 391.0], [47.5, 391.0], [47.6, 391.0], [47.7, 391.0], [47.8, 393.0], [47.9, 393.0], [48.0, 393.0], [48.1, 393.0], [48.2, 394.0], [48.3, 394.0], [48.4, 394.0], [48.5, 394.0], [48.6, 395.0], [48.7, 395.0], [48.8, 395.0], [48.9, 395.0], [49.0, 395.0], [49.1, 395.0], [49.2, 396.0], [49.3, 396.0], [49.4, 396.0], [49.5, 396.0], [49.6, 396.0], [49.7, 397.0], [49.8, 397.0], [49.9, 397.0], [50.0, 398.0], [50.1, 398.0], [50.2, 398.0], [50.3, 399.0], [50.4, 399.0], [50.5, 399.0], [50.6, 399.0], [50.7, 400.0], [50.8, 402.0], [50.9, 402.0], [51.0, 402.0], [51.1, 403.0], [51.2, 403.0], [51.3, 403.0], [51.4, 403.0], [51.5, 404.0], [51.6, 405.0], [51.7, 405.0], [51.8, 405.0], [51.9, 405.0], [52.0, 405.0], [52.1, 405.0], [52.2, 407.0], [52.3, 407.0], [52.4, 407.0], [52.5, 407.0], [52.6, 409.0], [52.7, 409.0], [52.8, 410.0], [52.9, 410.0], [53.0, 412.0], [53.1, 413.0], [53.2, 413.0], [53.3, 413.0], [53.4, 413.0], [53.5, 415.0], [53.6, 415.0], [53.7, 416.0], [53.8, 416.0], [53.9, 417.0], [54.0, 417.0], [54.1, 418.0], [54.2, 418.0], [54.3, 420.0], [54.4, 420.0], [54.5, 421.0], [54.6, 421.0], [54.7, 422.0], [54.8, 422.0], [54.9, 423.0], [55.0, 423.0], [55.1, 423.0], [55.2, 424.0], [55.3, 424.0], [55.4, 426.0], [55.5, 426.0], [55.6, 427.0], [55.7, 428.0], [55.8, 428.0], [55.9, 428.0], [56.0, 428.0], [56.1, 429.0], [56.2, 431.0], [56.3, 431.0], [56.4, 432.0], [56.5, 433.0], [56.6, 434.0], [56.7, 434.0], [56.8, 435.0], [56.9, 435.0], [57.0, 435.0], [57.1, 436.0], [57.2, 436.0], [57.3, 437.0], [57.4, 437.0], [57.5, 437.0], [57.6, 438.0], [57.7, 438.0], [57.8, 438.0], [57.9, 441.0], [58.0, 442.0], [58.1, 442.0], [58.2, 442.0], [58.3, 443.0], [58.4, 443.0], [58.5, 443.0], [58.6, 443.0], [58.7, 444.0], [58.8, 444.0], [58.9, 444.0], [59.0, 444.0], [59.1, 445.0], [59.2, 445.0], [59.3, 445.0], [59.4, 445.0], [59.5, 446.0], [59.6, 446.0], [59.7, 446.0], [59.8, 446.0], [59.9, 446.0], [60.0, 447.0], [60.1, 447.0], [60.2, 447.0], [60.3, 448.0], [60.4, 448.0], [60.5, 448.0], [60.6, 449.0], [60.7, 450.0], [60.8, 450.0], [60.9, 451.0], [61.0, 451.0], [61.1, 453.0], [61.2, 453.0], [61.3, 454.0], [61.4, 454.0], [61.5, 454.0], [61.6, 454.0], [61.7, 456.0], [61.8, 457.0], [61.9, 457.0], [62.0, 457.0], [62.1, 458.0], [62.2, 460.0], [62.3, 460.0], [62.4, 460.0], [62.5, 463.0], [62.6, 464.0], [62.7, 464.0], [62.8, 464.0], [62.9, 466.0], [63.0, 468.0], [63.1, 468.0], [63.2, 471.0], [63.3, 473.0], [63.4, 473.0], [63.5, 473.0], [63.6, 474.0], [63.7, 475.0], [63.8, 475.0], [63.9, 477.0], [64.0, 479.0], [64.1, 493.0], [64.2, 493.0], [64.3, 497.0], [64.4, 498.0], [64.5, 500.0], [64.6, 500.0], [64.7, 503.0], [64.8, 503.0], [64.9, 504.0], [65.0, 504.0], [65.1, 505.0], [65.2, 509.0], [65.3, 509.0], [65.4, 509.0], [65.5, 511.0], [65.6, 511.0], [65.7, 511.0], [65.8, 511.0], [65.9, 512.0], [66.0, 512.0], [66.1, 512.0], [66.2, 512.0], [66.3, 512.0], [66.4, 513.0], [66.5, 513.0], [66.6, 513.0], [66.7, 516.0], [66.8, 516.0], [66.9, 516.0], [67.0, 518.0], [67.1, 519.0], [67.2, 519.0], [67.3, 520.0], [67.4, 520.0], [67.5, 521.0], [67.6, 521.0], [67.7, 521.0], [67.8, 522.0], [67.9, 522.0], [68.0, 522.0], [68.1, 523.0], [68.2, 523.0], [68.3, 524.0], [68.4, 524.0], [68.5, 524.0], [68.6, 525.0], [68.7, 525.0], [68.8, 525.0], [68.9, 525.0], [69.0, 525.0], [69.1, 525.0], [69.2, 526.0], [69.3, 526.0], [69.4, 526.0], [69.5, 526.0], [69.6, 528.0], [69.7, 529.0], [69.8, 529.0], [69.9, 529.0], [70.0, 529.0], [70.1, 530.0], [70.2, 530.0], [70.3, 530.0], [70.4, 531.0], [70.5, 532.0], [70.6, 532.0], [70.7, 534.0], [70.8, 535.0], [70.9, 535.0], [71.0, 535.0], [71.1, 536.0], [71.2, 536.0], [71.3, 537.0], [71.4, 537.0], [71.5, 537.0], [71.6, 537.0], [71.7, 537.0], [71.8, 539.0], [71.9, 540.0], [72.0, 541.0], [72.1, 541.0], [72.2, 541.0], [72.3, 541.0], [72.4, 542.0], [72.5, 542.0], [72.6, 542.0], [72.7, 544.0], [72.8, 545.0], [72.9, 545.0], [73.0, 546.0], [73.1, 547.0], [73.2, 547.0], [73.3, 547.0], [73.4, 547.0], [73.5, 548.0], [73.6, 548.0], [73.7, 549.0], [73.8, 550.0], [73.9, 550.0], [74.0, 550.0], [74.1, 552.0], [74.2, 553.0], [74.3, 553.0], [74.4, 553.0], [74.5, 553.0], [74.6, 554.0], [74.7, 554.0], [74.8, 554.0], [74.9, 557.0], [75.0, 558.0], [75.1, 558.0], [75.2, 559.0], [75.3, 562.0], [75.4, 563.0], [75.5, 563.0], [75.6, 563.0], [75.7, 568.0], [75.8, 569.0], [75.9, 569.0], [76.0, 571.0], [76.1, 572.0], [76.2, 572.0], [76.3, 572.0], [76.4, 575.0], [76.5, 575.0], [76.6, 576.0], [76.7, 576.0], [76.8, 577.0], [76.9, 577.0], [77.0, 577.0], [77.1, 579.0], [77.2, 580.0], [77.3, 580.0], [77.4, 580.0], [77.5, 581.0], [77.6, 582.0], [77.7, 583.0], [77.8, 583.0], [77.9, 583.0], [78.0, 583.0], [78.1, 583.0], [78.2, 583.0], [78.3, 584.0], [78.4, 584.0], [78.5, 584.0], [78.6, 586.0], [78.7, 587.0], [78.8, 588.0], [78.9, 588.0], [79.0, 589.0], [79.1, 589.0], [79.2, 590.0], [79.3, 590.0], [79.4, 590.0], [79.5, 591.0], [79.6, 592.0], [79.7, 592.0], [79.8, 592.0], [79.9, 595.0], [80.0, 596.0], [80.1, 596.0], [80.2, 596.0], [80.3, 599.0], [80.4, 599.0], [80.5, 600.0], [80.6, 600.0], [80.7, 607.0], [80.8, 607.0], [80.9, 609.0], [81.0, 610.0], [81.1, 618.0], [81.2, 618.0], [81.3, 618.0], [81.4, 618.0], [81.5, 618.0], [81.6, 618.0], [81.7, 619.0], [81.8, 619.0], [81.9, 619.0], [82.0, 621.0], [82.1, 623.0], [82.2, 623.0], [82.3, 623.0], [82.4, 623.0], [82.5, 624.0], [82.6, 625.0], [82.7, 625.0], [82.8, 630.0], [82.9, 630.0], [83.0, 633.0], [83.1, 633.0], [83.2, 633.0], [83.3, 633.0], [83.4, 633.0], [83.5, 633.0], [83.6, 634.0], [83.7, 634.0], [83.8, 634.0], [83.9, 636.0], [84.0, 636.0], [84.1, 636.0], [84.2, 636.0], [84.3, 638.0], [84.4, 638.0], [84.5, 639.0], [84.6, 639.0], [84.7, 642.0], [84.8, 642.0], [84.9, 645.0], [85.0, 645.0], [85.1, 645.0], [85.2, 646.0], [85.3, 646.0], [85.4, 646.0], [85.5, 646.0], [85.6, 646.0], [85.7, 646.0], [85.8, 647.0], [85.9, 649.0], [86.0, 651.0], [86.1, 651.0], [86.2, 651.0], [86.3, 653.0], [86.4, 653.0], [86.5, 653.0], [86.6, 654.0], [86.7, 657.0], [86.8, 657.0], [86.9, 659.0], [87.0, 660.0], [87.1, 661.0], [87.2, 661.0], [87.3, 663.0], [87.4, 664.0], [87.5, 667.0], [87.6, 667.0], [87.7, 667.0], [87.8, 668.0], [87.9, 669.0], [88.0, 669.0], [88.1, 671.0], [88.2, 672.0], [88.3, 673.0], [88.4, 673.0], [88.5, 673.0], [88.6, 675.0], [88.7, 675.0], [88.8, 676.0], [88.9, 682.0], [89.0, 683.0], [89.1, 683.0], [89.2, 683.0], [89.3, 684.0], [89.4, 685.0], [89.5, 685.0], [89.6, 685.0], [89.7, 688.0], [89.8, 695.0], [89.9, 695.0], [90.0, 696.0], [90.1, 697.0], [90.2, 697.0], [90.3, 699.0], [90.4, 701.0], [90.5, 705.0], [90.6, 705.0], [90.7, 707.0], [90.8, 707.0], [90.9, 709.0], [91.0, 709.0], [91.1, 709.0], [91.2, 711.0], [91.3, 711.0], [91.4, 711.0], [91.5, 712.0], [91.6, 716.0], [91.7, 716.0], [91.8, 719.0], [91.9, 722.0], [92.0, 722.0], [92.1, 722.0], [92.2, 724.0], [92.3, 727.0], [92.4, 729.0], [92.5, 729.0], [92.6, 730.0], [92.7, 735.0], [92.8, 741.0], [92.9, 741.0], [93.0, 746.0], [93.1, 755.0], [93.2, 759.0], [93.3, 759.0], [93.4, 762.0], [93.5, 765.0], [93.6, 765.0], [93.7, 779.0], [93.8, 793.0], [93.9, 796.0], [94.0, 796.0], [94.1, 803.0], [94.2, 804.0], [94.3, 818.0], [94.4, 818.0], [94.5, 823.0], [94.6, 829.0], [94.7, 832.0], [94.8, 832.0], [94.9, 838.0], [95.0, 840.0], [95.1, 840.0], [95.2, 847.0], [95.3, 865.0], [95.4, 872.0], [95.5, 872.0], [95.6, 876.0], [95.7, 906.0], [95.8, 928.0], [95.9, 928.0], [96.0, 930.0], [96.1, 931.0], [96.2, 933.0], [96.3, 933.0], [96.4, 938.0], [96.5, 950.0], [96.6, 962.0], [96.7, 962.0], [96.8, 973.0], [96.9, 982.0], [97.0, 982.0], [97.1, 983.0], [97.2, 995.0], [97.3, 1050.0], [97.4, 1050.0], [97.5, 1055.0], [97.6, 1084.0], [97.7, 1090.0], [97.8, 1090.0], [97.9, 1107.0], [98.0, 1135.0], [98.1, 1217.0], [98.2, 1217.0], [98.3, 1219.0], [98.4, 1253.0], [98.5, 1253.0], [98.6, 1254.0], [98.7, 1261.0], [98.8, 1341.0], [98.9, 1341.0], [99.0, 1610.0], [99.1, 1619.0], [99.2, 1664.0], [99.3, 1664.0], [99.4, 2402.0], [99.5, 2756.0], [99.6, 2808.0], [99.7, 2808.0], [99.8, 2870.0], [99.9, 2906.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 184.0, "series": [{"data": [[600.0, 73.0], [2400.0, 1.0], [2700.0, 1.0], [2800.0, 2.0], [700.0, 27.0], [2900.0, 1.0], [200.0, 176.0], [800.0, 12.0], [900.0, 12.0], [1000.0, 4.0], [1100.0, 2.0], [300.0, 184.0], [1200.0, 5.0], [1300.0, 1.0], [400.0, 102.0], [100.0, 12.0], [1600.0, 3.0], [500.0, 117.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 475.0, "series": [{"data": [[0.0, 475.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 252.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60240386E12, "maxY": 1.0, "series": [{"data": [[1.60240398E12, 1.0], [1.60240392E12, 1.0], [1.6024041E12, 1.0], [1.60240404E12, 1.0], [1.60240422E12, 1.0], [1.60240416E12, 1.0], [1.60240386E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240422E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 469.6326530612243, "minX": 1.0, "maxY": 469.6326530612243, "series": [{"data": [[1.0, 469.6326530612243]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 469.6326530612243]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 320.48333333333335, "minX": 1.60240386E12, "maxY": 371917.7833333333, "series": [{"data": [[1.60240398E12, 260271.36666666667], [1.60240392E12, 360097.68333333335], [1.6024041E12, 282570.01666666666], [1.60240404E12, 371917.7833333333], [1.60240422E12, 166647.43333333332], [1.60240416E12, 252485.23333333334], [1.60240386E12, 141774.11666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60240398E12, 929.35], [1.60240392E12, 837.8666666666667], [1.6024041E12, 885.2833333333333], [1.60240404E12, 1105.6], [1.60240422E12, 410.18333333333334], [1.60240416E12, 1034.2666666666667], [1.60240386E12, 320.48333333333335]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240422E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 401.60402684563763, "minX": 1.60240386E12, "maxY": 540.0636363636364, "series": [{"data": [[1.60240398E12, 488.79674796747975], [1.60240392E12, 540.0636363636364], [1.6024041E12, 509.4102564102562], [1.60240404E12, 401.60402684563763], [1.60240422E12, 439.25000000000006], [1.60240416E12, 438.8248175182482], [1.60240386E12, 499.86046511627933]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240422E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 400.4899328859061, "minX": 1.60240386E12, "maxY": 538.827272727273, "series": [{"data": [[1.60240398E12, 487.60975609756093], [1.60240392E12, 538.827272727273], [1.6024041E12, 508.35897435897436], [1.60240404E12, 400.4899328859061], [1.60240422E12, 437.8571428571429], [1.60240416E12, 437.99270072992704], [1.60240386E12, 498.7441860465117]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240422E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.01626016260162602, "minX": 1.60240386E12, "maxY": 0.8139534883720929, "series": [{"data": [[1.60240398E12, 0.01626016260162602], [1.60240392E12, 0.018181818181818184], [1.6024041E12, 0.017094017094017092], [1.60240404E12, 0.02013422818791947], [1.60240422E12, 0.03571428571428572], [1.60240416E12, 0.021897810218978114], [1.60240386E12, 0.8139534883720929]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240422E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 188.0, "minX": 1.60240386E12, "maxY": 2906.0, "series": [{"data": [[1.60240398E12, 2402.0], [1.60240392E12, 2906.0], [1.6024041E12, 995.0], [1.60240404E12, 2870.0], [1.60240422E12, 1664.0], [1.60240416E12, 1107.0], [1.60240386E12, 2808.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60240398E12, 275.3479999113083], [1.60240392E12, 219.0], [1.6024041E12, 359.30999985933306], [1.60240404E12, 188.0], [1.60240422E12, 206.0], [1.60240416E12, 249.9359997367859], [1.60240386E12, 193.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60240398E12, 275.6828000354767], [1.60240392E12, 219.29670003175735], [1.6024041E12, 359.8410000562668], [1.60240404E12, 188.0], [1.60240422E12, 206.0], [1.60240416E12, 250.92960010528566], [1.60240386E12, 193.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60240398E12, 275.53399995565417], [1.60240392E12, 219.1634999603033], [1.6024041E12, 359.6049999296665], [1.60240404E12, 188.0], [1.60240422E12, 206.0], [1.60240416E12, 250.48799986839293], [1.60240386E12, 193.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60240398E12, 275.0], [1.60240392E12, 219.0], [1.6024041E12, 359.0], [1.60240404E12, 188.0], [1.60240422E12, 206.0], [1.60240416E12, 248.0], [1.60240386E12, 193.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60240398E12, 447.0], [1.60240392E12, 432.5], [1.6024041E12, 473.0], [1.60240404E12, 288.0], [1.60240422E12, 274.0], [1.60240416E12, 412.0], [1.60240386E12, 354.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240422E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 214.0, "minX": 1.0, "maxY": 645.0, "series": [{"data": [[1.0, 645.0], [2.0, 509.0], [4.0, 268.0], [5.0, 214.0], [3.0, 362.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 214.0, "minX": 1.0, "maxY": 643.0, "series": [{"data": [[1.0, 643.0], [2.0, 507.0], [4.0, 268.0], [5.0, 214.0], [3.0, 361.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.60240386E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60240398E12, 2.05], [1.60240392E12, 1.8333333333333333], [1.6024041E12, 1.95], [1.60240404E12, 2.4833333333333334], [1.60240422E12, 0.9166666666666666], [1.60240416E12, 2.283333333333333], [1.60240386E12, 0.7333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240422E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.7166666666666667, "minX": 1.60240386E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60240398E12, 2.05], [1.60240392E12, 1.8333333333333333], [1.6024041E12, 1.95], [1.60240404E12, 2.4833333333333334], [1.60240422E12, 0.9333333333333333], [1.60240416E12, 2.283333333333333], [1.60240386E12, 0.7166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60240422E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.7166666666666667, "minX": 1.60240386E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60240398E12, 2.05], [1.60240392E12, 1.8333333333333333], [1.6024041E12, 1.95], [1.60240404E12, 2.4833333333333334], [1.60240422E12, 0.9333333333333333], [1.60240416E12, 2.283333333333333], [1.60240386E12, 0.7166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240422E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.7166666666666667, "minX": 1.60240386E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.60240398E12, 2.05], [1.60240392E12, 1.8333333333333333], [1.6024041E12, 1.95], [1.60240404E12, 2.4833333333333334], [1.60240422E12, 0.9333333333333333], [1.60240416E12, 2.283333333333333], [1.60240386E12, 0.7166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60240422E12, "title": "Total Transactions Per Second"}},
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

