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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 8197.0, "series": [{"data": [[0.0, 2.0], [0.1, 4.0], [0.2, 12.0], [0.3, 13.0], [0.4, 13.0], [0.5, 14.0], [0.6, 14.0], [0.7, 15.0], [0.8, 15.0], [0.9, 16.0], [1.0, 18.0], [1.1, 21.0], [1.2, 22.0], [1.3, 24.0], [1.4, 27.0], [1.5, 28.0], [1.6, 29.0], [1.7, 30.0], [1.8, 31.0], [1.9, 33.0], [2.0, 35.0], [2.1, 36.0], [2.2, 38.0], [2.3, 42.0], [2.4, 46.0], [2.5, 48.0], [2.6, 52.0], [2.7, 59.0], [2.8, 64.0], [2.9, 66.0], [3.0, 69.0], [3.1, 72.0], [3.2, 78.0], [3.3, 83.0], [3.4, 89.0], [3.5, 94.0], [3.6, 100.0], [3.7, 108.0], [3.8, 111.0], [3.9, 115.0], [4.0, 116.0], [4.1, 119.0], [4.2, 120.0], [4.3, 123.0], [4.4, 124.0], [4.5, 125.0], [4.6, 126.0], [4.7, 127.0], [4.8, 129.0], [4.9, 130.0], [5.0, 131.0], [5.1, 132.0], [5.2, 132.0], [5.3, 133.0], [5.4, 133.0], [5.5, 134.0], [5.6, 134.0], [5.7, 134.0], [5.8, 135.0], [5.9, 136.0], [6.0, 137.0], [6.1, 138.0], [6.2, 138.0], [6.3, 139.0], [6.4, 140.0], [6.5, 140.0], [6.6, 141.0], [6.7, 142.0], [6.8, 142.0], [6.9, 143.0], [7.0, 144.0], [7.1, 144.0], [7.2, 145.0], [7.3, 145.0], [7.4, 146.0], [7.5, 147.0], [7.6, 147.0], [7.7, 148.0], [7.8, 148.0], [7.9, 149.0], [8.0, 149.0], [8.1, 149.0], [8.2, 150.0], [8.3, 150.0], [8.4, 151.0], [8.5, 151.0], [8.6, 152.0], [8.7, 153.0], [8.8, 153.0], [8.9, 154.0], [9.0, 155.0], [9.1, 156.0], [9.2, 157.0], [9.3, 157.0], [9.4, 157.0], [9.5, 158.0], [9.6, 159.0], [9.7, 159.0], [9.8, 159.0], [9.9, 160.0], [10.0, 160.0], [10.1, 161.0], [10.2, 161.0], [10.3, 162.0], [10.4, 162.0], [10.5, 163.0], [10.6, 163.0], [10.7, 164.0], [10.8, 164.0], [10.9, 165.0], [11.0, 165.0], [11.1, 166.0], [11.2, 167.0], [11.3, 167.0], [11.4, 167.0], [11.5, 168.0], [11.6, 169.0], [11.7, 169.0], [11.8, 169.0], [11.9, 169.0], [12.0, 170.0], [12.1, 171.0], [12.2, 172.0], [12.3, 173.0], [12.4, 173.0], [12.5, 173.0], [12.6, 174.0], [12.7, 174.0], [12.8, 175.0], [12.9, 176.0], [13.0, 176.0], [13.1, 176.0], [13.2, 177.0], [13.3, 178.0], [13.4, 178.0], [13.5, 178.0], [13.6, 179.0], [13.7, 180.0], [13.8, 180.0], [13.9, 181.0], [14.0, 181.0], [14.1, 182.0], [14.2, 182.0], [14.3, 183.0], [14.4, 184.0], [14.5, 185.0], [14.6, 185.0], [14.7, 186.0], [14.8, 187.0], [14.9, 187.0], [15.0, 188.0], [15.1, 189.0], [15.2, 190.0], [15.3, 191.0], [15.4, 191.0], [15.5, 192.0], [15.6, 192.0], [15.7, 192.0], [15.8, 193.0], [15.9, 194.0], [16.0, 194.0], [16.1, 195.0], [16.2, 195.0], [16.3, 196.0], [16.4, 196.0], [16.5, 196.0], [16.6, 197.0], [16.7, 198.0], [16.8, 198.0], [16.9, 199.0], [17.0, 199.0], [17.1, 200.0], [17.2, 201.0], [17.3, 201.0], [17.4, 201.0], [17.5, 202.0], [17.6, 202.0], [17.7, 203.0], [17.8, 203.0], [17.9, 204.0], [18.0, 205.0], [18.1, 205.0], [18.2, 205.0], [18.3, 206.0], [18.4, 206.0], [18.5, 207.0], [18.6, 207.0], [18.7, 208.0], [18.8, 209.0], [18.9, 210.0], [19.0, 211.0], [19.1, 211.0], [19.2, 212.0], [19.3, 212.0], [19.4, 213.0], [19.5, 213.0], [19.6, 213.0], [19.7, 214.0], [19.8, 214.0], [19.9, 215.0], [20.0, 215.0], [20.1, 215.0], [20.2, 216.0], [20.3, 216.0], [20.4, 217.0], [20.5, 218.0], [20.6, 218.0], [20.7, 219.0], [20.8, 219.0], [20.9, 220.0], [21.0, 220.0], [21.1, 220.0], [21.2, 221.0], [21.3, 221.0], [21.4, 222.0], [21.5, 222.0], [21.6, 223.0], [21.7, 223.0], [21.8, 224.0], [21.9, 224.0], [22.0, 225.0], [22.1, 225.0], [22.2, 226.0], [22.3, 227.0], [22.4, 227.0], [22.5, 227.0], [22.6, 227.0], [22.7, 228.0], [22.8, 229.0], [22.9, 229.0], [23.0, 230.0], [23.1, 230.0], [23.2, 231.0], [23.3, 231.0], [23.4, 232.0], [23.5, 232.0], [23.6, 232.0], [23.7, 233.0], [23.8, 233.0], [23.9, 234.0], [24.0, 234.0], [24.1, 235.0], [24.2, 235.0], [24.3, 236.0], [24.4, 236.0], [24.5, 237.0], [24.6, 237.0], [24.7, 238.0], [24.8, 238.0], [24.9, 239.0], [25.0, 239.0], [25.1, 240.0], [25.2, 240.0], [25.3, 241.0], [25.4, 241.0], [25.5, 242.0], [25.6, 242.0], [25.7, 242.0], [25.8, 243.0], [25.9, 243.0], [26.0, 244.0], [26.1, 244.0], [26.2, 245.0], [26.3, 245.0], [26.4, 246.0], [26.5, 247.0], [26.6, 248.0], [26.7, 248.0], [26.8, 249.0], [26.9, 250.0], [27.0, 250.0], [27.1, 251.0], [27.2, 251.0], [27.3, 251.0], [27.4, 252.0], [27.5, 252.0], [27.6, 253.0], [27.7, 253.0], [27.8, 254.0], [27.9, 254.0], [28.0, 255.0], [28.1, 255.0], [28.2, 256.0], [28.3, 256.0], [28.4, 256.0], [28.5, 257.0], [28.6, 258.0], [28.7, 258.0], [28.8, 259.0], [28.9, 259.0], [29.0, 260.0], [29.1, 260.0], [29.2, 260.0], [29.3, 261.0], [29.4, 261.0], [29.5, 262.0], [29.6, 262.0], [29.7, 263.0], [29.8, 263.0], [29.9, 263.0], [30.0, 263.0], [30.1, 264.0], [30.2, 264.0], [30.3, 265.0], [30.4, 265.0], [30.5, 265.0], [30.6, 266.0], [30.7, 267.0], [30.8, 267.0], [30.9, 268.0], [31.0, 268.0], [31.1, 269.0], [31.2, 269.0], [31.3, 269.0], [31.4, 270.0], [31.5, 270.0], [31.6, 270.0], [31.7, 271.0], [31.8, 271.0], [31.9, 271.0], [32.0, 271.0], [32.1, 272.0], [32.2, 272.0], [32.3, 273.0], [32.4, 273.0], [32.5, 273.0], [32.6, 274.0], [32.7, 274.0], [32.8, 275.0], [32.9, 275.0], [33.0, 275.0], [33.1, 276.0], [33.2, 276.0], [33.3, 276.0], [33.4, 277.0], [33.5, 277.0], [33.6, 277.0], [33.7, 278.0], [33.8, 278.0], [33.9, 279.0], [34.0, 279.0], [34.1, 279.0], [34.2, 279.0], [34.3, 279.0], [34.4, 280.0], [34.5, 281.0], [34.6, 281.0], [34.7, 282.0], [34.8, 282.0], [34.9, 282.0], [35.0, 283.0], [35.1, 283.0], [35.2, 283.0], [35.3, 283.0], [35.4, 284.0], [35.5, 284.0], [35.6, 285.0], [35.7, 285.0], [35.8, 285.0], [35.9, 286.0], [36.0, 286.0], [36.1, 287.0], [36.2, 287.0], [36.3, 288.0], [36.4, 288.0], [36.5, 288.0], [36.6, 289.0], [36.7, 289.0], [36.8, 289.0], [36.9, 290.0], [37.0, 290.0], [37.1, 290.0], [37.2, 291.0], [37.3, 291.0], [37.4, 292.0], [37.5, 292.0], [37.6, 292.0], [37.7, 293.0], [37.8, 293.0], [37.9, 294.0], [38.0, 294.0], [38.1, 294.0], [38.2, 295.0], [38.3, 295.0], [38.4, 296.0], [38.5, 296.0], [38.6, 297.0], [38.7, 297.0], [38.8, 298.0], [38.9, 298.0], [39.0, 298.0], [39.1, 299.0], [39.2, 300.0], [39.3, 300.0], [39.4, 301.0], [39.5, 301.0], [39.6, 301.0], [39.7, 302.0], [39.8, 302.0], [39.9, 303.0], [40.0, 303.0], [40.1, 304.0], [40.2, 304.0], [40.3, 305.0], [40.4, 305.0], [40.5, 305.0], [40.6, 306.0], [40.7, 306.0], [40.8, 307.0], [40.9, 307.0], [41.0, 307.0], [41.1, 308.0], [41.2, 308.0], [41.3, 308.0], [41.4, 308.0], [41.5, 309.0], [41.6, 310.0], [41.7, 310.0], [41.8, 311.0], [41.9, 311.0], [42.0, 311.0], [42.1, 312.0], [42.2, 312.0], [42.3, 313.0], [42.4, 313.0], [42.5, 314.0], [42.6, 314.0], [42.7, 315.0], [42.8, 315.0], [42.9, 315.0], [43.0, 316.0], [43.1, 316.0], [43.2, 317.0], [43.3, 317.0], [43.4, 317.0], [43.5, 318.0], [43.6, 318.0], [43.7, 318.0], [43.8, 319.0], [43.9, 319.0], [44.0, 319.0], [44.1, 320.0], [44.2, 320.0], [44.3, 320.0], [44.4, 321.0], [44.5, 321.0], [44.6, 321.0], [44.7, 321.0], [44.8, 322.0], [44.9, 322.0], [45.0, 323.0], [45.1, 323.0], [45.2, 324.0], [45.3, 324.0], [45.4, 325.0], [45.5, 325.0], [45.6, 325.0], [45.7, 326.0], [45.8, 326.0], [45.9, 327.0], [46.0, 327.0], [46.1, 328.0], [46.2, 328.0], [46.3, 328.0], [46.4, 329.0], [46.5, 329.0], [46.6, 329.0], [46.7, 329.0], [46.8, 330.0], [46.9, 330.0], [47.0, 331.0], [47.1, 331.0], [47.2, 332.0], [47.3, 332.0], [47.4, 333.0], [47.5, 333.0], [47.6, 334.0], [47.7, 334.0], [47.8, 335.0], [47.9, 335.0], [48.0, 335.0], [48.1, 336.0], [48.2, 336.0], [48.3, 337.0], [48.4, 337.0], [48.5, 337.0], [48.6, 338.0], [48.7, 338.0], [48.8, 338.0], [48.9, 339.0], [49.0, 339.0], [49.1, 340.0], [49.2, 340.0], [49.3, 341.0], [49.4, 341.0], [49.5, 342.0], [49.6, 343.0], [49.7, 343.0], [49.8, 343.0], [49.9, 343.0], [50.0, 344.0], [50.1, 344.0], [50.2, 344.0], [50.3, 345.0], [50.4, 346.0], [50.5, 347.0], [50.6, 347.0], [50.7, 348.0], [50.8, 348.0], [50.9, 349.0], [51.0, 349.0], [51.1, 349.0], [51.2, 349.0], [51.3, 350.0], [51.4, 351.0], [51.5, 351.0], [51.6, 352.0], [51.7, 352.0], [51.8, 352.0], [51.9, 353.0], [52.0, 353.0], [52.1, 353.0], [52.2, 354.0], [52.3, 354.0], [52.4, 355.0], [52.5, 355.0], [52.6, 356.0], [52.7, 356.0], [52.8, 357.0], [52.9, 357.0], [53.0, 358.0], [53.1, 358.0], [53.2, 359.0], [53.3, 360.0], [53.4, 360.0], [53.5, 361.0], [53.6, 361.0], [53.7, 361.0], [53.8, 362.0], [53.9, 363.0], [54.0, 363.0], [54.1, 364.0], [54.2, 364.0], [54.3, 365.0], [54.4, 365.0], [54.5, 366.0], [54.6, 366.0], [54.7, 366.0], [54.8, 367.0], [54.9, 367.0], [55.0, 368.0], [55.1, 368.0], [55.2, 368.0], [55.3, 369.0], [55.4, 369.0], [55.5, 370.0], [55.6, 370.0], [55.7, 371.0], [55.8, 371.0], [55.9, 372.0], [56.0, 373.0], [56.1, 373.0], [56.2, 373.0], [56.3, 374.0], [56.4, 374.0], [56.5, 375.0], [56.6, 375.0], [56.7, 376.0], [56.8, 376.0], [56.9, 376.0], [57.0, 377.0], [57.1, 377.0], [57.2, 378.0], [57.3, 378.0], [57.4, 379.0], [57.5, 379.0], [57.6, 380.0], [57.7, 380.0], [57.8, 381.0], [57.9, 381.0], [58.0, 381.0], [58.1, 382.0], [58.2, 382.0], [58.3, 383.0], [58.4, 383.0], [58.5, 383.0], [58.6, 384.0], [58.7, 384.0], [58.8, 385.0], [58.9, 385.0], [59.0, 386.0], [59.1, 387.0], [59.2, 387.0], [59.3, 388.0], [59.4, 388.0], [59.5, 389.0], [59.6, 390.0], [59.7, 390.0], [59.8, 391.0], [59.9, 391.0], [60.0, 391.0], [60.1, 392.0], [60.2, 392.0], [60.3, 393.0], [60.4, 393.0], [60.5, 394.0], [60.6, 395.0], [60.7, 395.0], [60.8, 396.0], [60.9, 396.0], [61.0, 397.0], [61.1, 397.0], [61.2, 397.0], [61.3, 398.0], [61.4, 399.0], [61.5, 399.0], [61.6, 400.0], [61.7, 401.0], [61.8, 401.0], [61.9, 401.0], [62.0, 402.0], [62.1, 402.0], [62.2, 403.0], [62.3, 404.0], [62.4, 404.0], [62.5, 405.0], [62.6, 406.0], [62.7, 406.0], [62.8, 406.0], [62.9, 407.0], [63.0, 407.0], [63.1, 408.0], [63.2, 408.0], [63.3, 409.0], [63.4, 409.0], [63.5, 410.0], [63.6, 410.0], [63.7, 411.0], [63.8, 411.0], [63.9, 412.0], [64.0, 413.0], [64.1, 414.0], [64.2, 415.0], [64.3, 416.0], [64.4, 416.0], [64.5, 417.0], [64.6, 418.0], [64.7, 418.0], [64.8, 419.0], [64.9, 420.0], [65.0, 420.0], [65.1, 421.0], [65.2, 422.0], [65.3, 422.0], [65.4, 422.0], [65.5, 423.0], [65.6, 423.0], [65.7, 423.0], [65.8, 425.0], [65.9, 426.0], [66.0, 427.0], [66.1, 427.0], [66.2, 428.0], [66.3, 428.0], [66.4, 428.0], [66.5, 429.0], [66.6, 429.0], [66.7, 430.0], [66.8, 430.0], [66.9, 431.0], [67.0, 431.0], [67.1, 431.0], [67.2, 432.0], [67.3, 433.0], [67.4, 434.0], [67.5, 434.0], [67.6, 434.0], [67.7, 435.0], [67.8, 436.0], [67.9, 436.0], [68.0, 436.0], [68.1, 437.0], [68.2, 437.0], [68.3, 438.0], [68.4, 438.0], [68.5, 439.0], [68.6, 439.0], [68.7, 440.0], [68.8, 440.0], [68.9, 440.0], [69.0, 441.0], [69.1, 442.0], [69.2, 443.0], [69.3, 444.0], [69.4, 445.0], [69.5, 446.0], [69.6, 446.0], [69.7, 447.0], [69.8, 447.0], [69.9, 448.0], [70.0, 448.0], [70.1, 449.0], [70.2, 450.0], [70.3, 451.0], [70.4, 451.0], [70.5, 452.0], [70.6, 453.0], [70.7, 454.0], [70.8, 454.0], [70.9, 455.0], [71.0, 455.0], [71.1, 456.0], [71.2, 457.0], [71.3, 458.0], [71.4, 459.0], [71.5, 459.0], [71.6, 459.0], [71.7, 460.0], [71.8, 460.0], [71.9, 461.0], [72.0, 461.0], [72.1, 463.0], [72.2, 463.0], [72.3, 464.0], [72.4, 465.0], [72.5, 466.0], [72.6, 467.0], [72.7, 468.0], [72.8, 468.0], [72.9, 469.0], [73.0, 470.0], [73.1, 470.0], [73.2, 471.0], [73.3, 473.0], [73.4, 474.0], [73.5, 476.0], [73.6, 476.0], [73.7, 477.0], [73.8, 478.0], [73.9, 478.0], [74.0, 478.0], [74.1, 480.0], [74.2, 480.0], [74.3, 482.0], [74.4, 482.0], [74.5, 483.0], [74.6, 484.0], [74.7, 485.0], [74.8, 486.0], [74.9, 487.0], [75.0, 487.0], [75.1, 488.0], [75.2, 489.0], [75.3, 489.0], [75.4, 490.0], [75.5, 490.0], [75.6, 491.0], [75.7, 493.0], [75.8, 494.0], [75.9, 494.0], [76.0, 495.0], [76.1, 496.0], [76.2, 496.0], [76.3, 497.0], [76.4, 498.0], [76.5, 499.0], [76.6, 500.0], [76.7, 501.0], [76.8, 501.0], [76.9, 501.0], [77.0, 502.0], [77.1, 503.0], [77.2, 503.0], [77.3, 504.0], [77.4, 505.0], [77.5, 507.0], [77.6, 508.0], [77.7, 508.0], [77.8, 510.0], [77.9, 511.0], [78.0, 511.0], [78.1, 512.0], [78.2, 513.0], [78.3, 514.0], [78.4, 515.0], [78.5, 517.0], [78.6, 517.0], [78.7, 518.0], [78.8, 519.0], [78.9, 520.0], [79.0, 521.0], [79.1, 521.0], [79.2, 522.0], [79.3, 522.0], [79.4, 524.0], [79.5, 525.0], [79.6, 526.0], [79.7, 526.0], [79.8, 527.0], [79.9, 527.0], [80.0, 528.0], [80.1, 529.0], [80.2, 530.0], [80.3, 531.0], [80.4, 532.0], [80.5, 533.0], [80.6, 535.0], [80.7, 536.0], [80.8, 536.0], [80.9, 538.0], [81.0, 539.0], [81.1, 540.0], [81.2, 541.0], [81.3, 542.0], [81.4, 543.0], [81.5, 544.0], [81.6, 546.0], [81.7, 546.0], [81.8, 548.0], [81.9, 548.0], [82.0, 550.0], [82.1, 551.0], [82.2, 552.0], [82.3, 553.0], [82.4, 554.0], [82.5, 555.0], [82.6, 557.0], [82.7, 559.0], [82.8, 560.0], [82.9, 561.0], [83.0, 563.0], [83.1, 565.0], [83.2, 565.0], [83.3, 567.0], [83.4, 569.0], [83.5, 570.0], [83.6, 572.0], [83.7, 573.0], [83.8, 573.0], [83.9, 574.0], [84.0, 576.0], [84.1, 577.0], [84.2, 578.0], [84.3, 579.0], [84.4, 580.0], [84.5, 581.0], [84.6, 583.0], [84.7, 584.0], [84.8, 586.0], [84.9, 588.0], [85.0, 590.0], [85.1, 591.0], [85.2, 592.0], [85.3, 593.0], [85.4, 595.0], [85.5, 596.0], [85.6, 597.0], [85.7, 599.0], [85.8, 600.0], [85.9, 603.0], [86.0, 604.0], [86.1, 605.0], [86.2, 607.0], [86.3, 608.0], [86.4, 611.0], [86.5, 613.0], [86.6, 614.0], [86.7, 614.0], [86.8, 616.0], [86.9, 617.0], [87.0, 620.0], [87.1, 621.0], [87.2, 624.0], [87.3, 624.0], [87.4, 626.0], [87.5, 627.0], [87.6, 628.0], [87.7, 629.0], [87.8, 631.0], [87.9, 632.0], [88.0, 633.0], [88.1, 634.0], [88.2, 638.0], [88.3, 640.0], [88.4, 642.0], [88.5, 643.0], [88.6, 645.0], [88.7, 646.0], [88.8, 650.0], [88.9, 650.0], [89.0, 652.0], [89.1, 653.0], [89.2, 657.0], [89.3, 659.0], [89.4, 661.0], [89.5, 664.0], [89.6, 665.0], [89.7, 669.0], [89.8, 672.0], [89.9, 674.0], [90.0, 675.0], [90.1, 678.0], [90.2, 679.0], [90.3, 681.0], [90.4, 683.0], [90.5, 686.0], [90.6, 694.0], [90.7, 696.0], [90.8, 697.0], [90.9, 698.0], [91.0, 703.0], [91.1, 707.0], [91.2, 710.0], [91.3, 714.0], [91.4, 719.0], [91.5, 724.0], [91.6, 727.0], [91.7, 729.0], [91.8, 732.0], [91.9, 735.0], [92.0, 740.0], [92.1, 744.0], [92.2, 746.0], [92.3, 753.0], [92.4, 755.0], [92.5, 758.0], [92.6, 759.0], [92.7, 764.0], [92.8, 768.0], [92.9, 776.0], [93.0, 781.0], [93.1, 786.0], [93.2, 792.0], [93.3, 797.0], [93.4, 801.0], [93.5, 806.0], [93.6, 811.0], [93.7, 816.0], [93.8, 824.0], [93.9, 832.0], [94.0, 839.0], [94.1, 845.0], [94.2, 852.0], [94.3, 865.0], [94.4, 871.0], [94.5, 876.0], [94.6, 882.0], [94.7, 902.0], [94.8, 916.0], [94.9, 932.0], [95.0, 942.0], [95.1, 945.0], [95.2, 955.0], [95.3, 965.0], [95.4, 973.0], [95.5, 987.0], [95.6, 993.0], [95.7, 999.0], [95.8, 1009.0], [95.9, 1023.0], [96.0, 1041.0], [96.1, 1065.0], [96.2, 1084.0], [96.3, 1093.0], [96.4, 1111.0], [96.5, 1134.0], [96.6, 1138.0], [96.7, 1155.0], [96.8, 1195.0], [96.9, 1214.0], [97.0, 1266.0], [97.1, 1295.0], [97.2, 1315.0], [97.3, 1337.0], [97.4, 1362.0], [97.5, 1374.0], [97.6, 1425.0], [97.7, 1456.0], [97.8, 1494.0], [97.9, 1562.0], [98.0, 1596.0], [98.1, 1620.0], [98.2, 1637.0], [98.3, 1679.0], [98.4, 1714.0], [98.5, 1794.0], [98.6, 1816.0], [98.7, 1867.0], [98.8, 1898.0], [98.9, 1956.0], [99.0, 2086.0], [99.1, 2172.0], [99.2, 2339.0], [99.3, 2459.0], [99.4, 2903.0], [99.5, 3047.0], [99.6, 3982.0], [99.7, 4364.0], [99.8, 4610.0], [99.9, 6886.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1161.0, "series": [{"data": [[0.0, 185.0], [600.0, 266.0], [700.0, 127.0], [800.0, 69.0], [900.0, 53.0], [1000.0, 36.0], [1100.0, 23.0], [1200.0, 14.0], [1300.0, 23.0], [1400.0, 14.0], [1500.0, 10.0], [1600.0, 16.0], [1700.0, 11.0], [1800.0, 14.0], [1900.0, 7.0], [2000.0, 5.0], [2100.0, 6.0], [2300.0, 5.0], [2200.0, 1.0], [2400.0, 2.0], [2500.0, 2.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 4.0], [3000.0, 3.0], [3200.0, 1.0], [3300.0, 1.0], [3400.0, 1.0], [3600.0, 1.0], [3900.0, 1.0], [4000.0, 1.0], [4300.0, 3.0], [4200.0, 2.0], [4500.0, 3.0], [4600.0, 2.0], [4800.0, 1.0], [5000.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7200.0, 1.0], [7500.0, 1.0], [8100.0, 1.0], [8000.0, 1.0], [100.0, 700.0], [200.0, 1149.0], [300.0, 1161.0], [400.0, 778.0], [500.0, 479.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 112.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3977.0, "series": [{"data": [[0.0, 3977.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1101.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 112.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.765625, "minX": 1.6024926E12, "maxY": 10.0, "series": [{"data": [[1.60249284E12, 9.765625], [1.60249266E12, 10.0], [1.60249278E12, 10.0], [1.6024926E12, 9.99755799755801], [1.60249272E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249284E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 256.0, "minX": 1.0, "maxY": 676.0, "series": [{"data": [[8.0, 676.0], [4.0, 288.0], [2.0, 546.0], [1.0, 449.0], [9.0, 256.0], [10.0, 429.486293436294], [5.0, 356.0], [6.0, 263.0], [3.0, 338.0], [7.0, 541.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 429.5044315992294]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1337.9833333333333, "minX": 1.6024926E12, "maxY": 9935085.5, "series": [{"data": [[1.60249284E12, 1509668.2833333334], [1.60249266E12, 9560639.85], [1.60249278E12, 9935085.5], [1.6024926E12, 5500190.683333334], [1.60249272E12, 9471914.683333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249284E12, 1337.9833333333333], [1.60249266E12, 8847.833333333334], [1.60249278E12, 9746.733333333334], [1.6024926E12, 5429.383333333333], [1.60249272E12, 9781.833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249284E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 383.6510416666668, "minX": 1.6024926E12, "maxY": 468.6707692307698, "series": [{"data": [[1.60249284E12, 383.6510416666668], [1.60249266E12, 468.6707692307698], [1.60249278E12, 421.1650349650352], [1.6024926E12, 428.4358974358974], [1.60249272E12, 409.2753623188414]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249284E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 378.4322916666666, "minX": 1.6024926E12, "maxY": 464.0646153846149, "series": [{"data": [[1.60249284E12, 378.4322916666666], [1.60249266E12, 464.0646153846149], [1.60249278E12, 418.05314685314704], [1.6024926E12, 424.70207570207606], [1.60249272E12, 405.5079365079359]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249284E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.005208333333333334, "minX": 1.6024926E12, "maxY": 0.11233211233211227, "series": [{"data": [[1.60249284E12, 0.005208333333333334], [1.60249266E12, 0.009230769230769246], [1.60249278E12, 0.007692307692307686], [1.6024926E12, 0.11233211233211227], [1.60249272E12, 0.006901311249137338]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249284E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.6024926E12, "maxY": 8197.0, "series": [{"data": [[1.60249284E12, 1679.0], [1.60249266E12, 7506.0], [1.60249278E12, 8004.0], [1.6024926E12, 8197.0], [1.60249272E12, 4631.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249284E12, 139.94799981594085], [1.60249266E12, 15.0], [1.60249278E12, 34.51599863529206], [1.6024926E12, 13.0], [1.60249272E12, 15.04999965429306]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249284E12, 140.64280007362365], [1.60249266E12, 15.0], [1.60249278E12, 36.166900136470794], [1.6024926E12, 13.23600015640259], [1.60249272E12, 16.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249284E12, 140.33399990797042], [1.60249266E12, 15.0], [1.60249278E12, 35.594499829411504], [1.6024926E12, 13.0], [1.60249272E12, 15.774999827146528]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249284E12, 137.0], [1.60249266E12, 4.0], [1.60249278E12, 2.0], [1.6024926E12, 13.0], [1.60249272E12, 12.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249284E12, 367.0], [1.60249266E12, 374.5], [1.60249278E12, 353.0], [1.6024926E12, 318.0], [1.60249272E12, 325.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249284E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 999.0, "series": [{"data": [[33.0, 284.0], [32.0, 275.5], [35.0, 225.0], [34.0, 272.5], [37.0, 266.0], [38.0, 242.5], [40.0, 198.5], [41.0, 227.0], [42.0, 194.0], [3.0, 42.0], [7.0, 609.0], [8.0, 731.0], [9.0, 996.0], [10.0, 888.0], [11.0, 668.5], [12.0, 547.5], [13.0, 285.0], [14.0, 328.5], [15.0, 286.0], [1.0, 999.0], [16.0, 438.5], [17.0, 435.5], [18.0, 436.5], [19.0, 367.0], [20.0, 412.5], [21.0, 377.5], [22.0, 382.5], [23.0, 347.0], [24.0, 396.5], [25.0, 359.0], [26.0, 351.0], [27.0, 355.5], [28.0, 330.0], [29.0, 321.0], [30.0, 292.0], [31.0, 286.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 42.0, "minX": 1.0, "maxY": 998.0, "series": [{"data": [[33.0, 280.0], [32.0, 275.0], [35.0, 225.0], [34.0, 272.0], [37.0, 257.0], [38.0, 236.0], [40.0, 194.0], [41.0, 223.0], [42.0, 193.0], [3.0, 42.0], [7.0, 606.0], [8.0, 724.5], [9.0, 995.0], [10.0, 885.0], [11.0, 663.0], [12.0, 546.5], [13.0, 278.0], [14.0, 326.5], [15.0, 277.0], [1.0, 998.0], [16.0, 434.0], [17.0, 420.0], [18.0, 435.5], [19.0, 366.0], [20.0, 411.5], [21.0, 374.5], [22.0, 378.0], [23.0, 340.0], [24.0, 386.5], [25.0, 354.5], [26.0, 347.0], [27.0, 353.0], [28.0, 326.0], [29.0, 316.5], [30.0, 288.5], [31.0, 285.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.033333333333333, "minX": 1.6024926E12, "maxY": 24.15, "series": [{"data": [[1.60249284E12, 3.033333333333333], [1.60249266E12, 21.666666666666668], [1.60249278E12, 23.833333333333332], [1.6024926E12, 13.816666666666666], [1.60249272E12, 24.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249284E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.6024926E12, "maxY": 24.15, "series": [{"data": [[1.60249284E12, 3.2], [1.60249266E12, 21.666666666666668], [1.60249278E12, 23.833333333333332], [1.6024926E12, 13.65], [1.60249272E12, 24.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249284E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.6024926E12, "maxY": 24.15, "series": [{"data": [[1.60249284E12, 3.2], [1.60249266E12, 21.666666666666668], [1.60249278E12, 23.833333333333332], [1.6024926E12, 13.65], [1.60249272E12, 24.15]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249284E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.2, "minX": 1.6024926E12, "maxY": 24.15, "series": [{"data": [[1.60249284E12, 3.2], [1.60249266E12, 21.666666666666668], [1.60249278E12, 23.833333333333332], [1.6024926E12, 13.65], [1.60249272E12, 24.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249284E12, "title": "Total Transactions Per Second"}},
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

