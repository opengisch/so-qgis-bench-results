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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 8040.0, "series": [{"data": [[0.0, 2.0], [0.1, 6.0], [0.2, 12.0], [0.3, 13.0], [0.4, 13.0], [0.5, 13.0], [0.6, 13.0], [0.7, 14.0], [0.8, 16.0], [0.9, 17.0], [1.0, 19.0], [1.1, 20.0], [1.2, 22.0], [1.3, 23.0], [1.4, 26.0], [1.5, 27.0], [1.6, 28.0], [1.7, 30.0], [1.8, 32.0], [1.9, 34.0], [2.0, 35.0], [2.1, 36.0], [2.2, 40.0], [2.3, 42.0], [2.4, 46.0], [2.5, 50.0], [2.6, 54.0], [2.7, 57.0], [2.8, 63.0], [2.9, 66.0], [3.0, 68.0], [3.1, 73.0], [3.2, 77.0], [3.3, 80.0], [3.4, 85.0], [3.5, 97.0], [3.6, 101.0], [3.7, 109.0], [3.8, 111.0], [3.9, 116.0], [4.0, 120.0], [4.1, 123.0], [4.2, 125.0], [4.3, 125.0], [4.4, 126.0], [4.5, 127.0], [4.6, 128.0], [4.7, 129.0], [4.8, 130.0], [4.9, 131.0], [5.0, 132.0], [5.1, 133.0], [5.2, 134.0], [5.3, 134.0], [5.4, 135.0], [5.5, 135.0], [5.6, 136.0], [5.7, 137.0], [5.8, 138.0], [5.9, 139.0], [6.0, 140.0], [6.1, 141.0], [6.2, 142.0], [6.3, 142.0], [6.4, 143.0], [6.5, 144.0], [6.6, 144.0], [6.7, 145.0], [6.8, 146.0], [6.9, 147.0], [7.0, 148.0], [7.1, 148.0], [7.2, 149.0], [7.3, 149.0], [7.4, 150.0], [7.5, 151.0], [7.6, 151.0], [7.7, 151.0], [7.8, 152.0], [7.9, 153.0], [8.0, 153.0], [8.1, 153.0], [8.2, 154.0], [8.3, 155.0], [8.4, 155.0], [8.5, 156.0], [8.6, 156.0], [8.7, 157.0], [8.8, 157.0], [8.9, 157.0], [9.0, 158.0], [9.1, 159.0], [9.2, 160.0], [9.3, 160.0], [9.4, 160.0], [9.5, 160.0], [9.6, 161.0], [9.7, 162.0], [9.8, 162.0], [9.9, 163.0], [10.0, 163.0], [10.1, 164.0], [10.2, 164.0], [10.3, 165.0], [10.4, 166.0], [10.5, 166.0], [10.6, 167.0], [10.7, 168.0], [10.8, 168.0], [10.9, 169.0], [11.0, 169.0], [11.1, 170.0], [11.2, 171.0], [11.3, 171.0], [11.4, 171.0], [11.5, 172.0], [11.6, 172.0], [11.7, 173.0], [11.8, 173.0], [11.9, 174.0], [12.0, 174.0], [12.1, 174.0], [12.2, 175.0], [12.3, 175.0], [12.4, 176.0], [12.5, 176.0], [12.6, 176.0], [12.7, 177.0], [12.8, 178.0], [12.9, 178.0], [13.0, 179.0], [13.1, 180.0], [13.2, 180.0], [13.3, 181.0], [13.4, 182.0], [13.5, 182.0], [13.6, 183.0], [13.7, 183.0], [13.8, 184.0], [13.9, 184.0], [14.0, 185.0], [14.1, 185.0], [14.2, 185.0], [14.3, 186.0], [14.4, 186.0], [14.5, 187.0], [14.6, 187.0], [14.7, 188.0], [14.8, 188.0], [14.9, 188.0], [15.0, 189.0], [15.1, 190.0], [15.2, 190.0], [15.3, 191.0], [15.4, 191.0], [15.5, 192.0], [15.6, 192.0], [15.7, 193.0], [15.8, 194.0], [15.9, 195.0], [16.0, 195.0], [16.1, 195.0], [16.2, 196.0], [16.3, 196.0], [16.4, 197.0], [16.5, 197.0], [16.6, 198.0], [16.7, 199.0], [16.8, 199.0], [16.9, 200.0], [17.0, 201.0], [17.1, 201.0], [17.2, 202.0], [17.3, 202.0], [17.4, 203.0], [17.5, 204.0], [17.6, 204.0], [17.7, 205.0], [17.8, 205.0], [17.9, 205.0], [18.0, 206.0], [18.1, 206.0], [18.2, 206.0], [18.3, 207.0], [18.4, 207.0], [18.5, 208.0], [18.6, 208.0], [18.7, 209.0], [18.8, 209.0], [18.9, 209.0], [19.0, 211.0], [19.1, 211.0], [19.2, 211.0], [19.3, 212.0], [19.4, 212.0], [19.5, 213.0], [19.6, 213.0], [19.7, 214.0], [19.8, 214.0], [19.9, 215.0], [20.0, 215.0], [20.1, 216.0], [20.2, 217.0], [20.3, 217.0], [20.4, 218.0], [20.5, 218.0], [20.6, 219.0], [20.7, 219.0], [20.8, 219.0], [20.9, 220.0], [21.0, 220.0], [21.1, 221.0], [21.2, 221.0], [21.3, 221.0], [21.4, 222.0], [21.5, 222.0], [21.6, 222.0], [21.7, 223.0], [21.8, 223.0], [21.9, 224.0], [22.0, 224.0], [22.1, 225.0], [22.2, 225.0], [22.3, 226.0], [22.4, 226.0], [22.5, 227.0], [22.6, 227.0], [22.7, 228.0], [22.8, 228.0], [22.9, 229.0], [23.0, 229.0], [23.1, 230.0], [23.2, 231.0], [23.3, 231.0], [23.4, 232.0], [23.5, 232.0], [23.6, 233.0], [23.7, 233.0], [23.8, 233.0], [23.9, 234.0], [24.0, 235.0], [24.1, 235.0], [24.2, 235.0], [24.3, 236.0], [24.4, 236.0], [24.5, 237.0], [24.6, 237.0], [24.7, 238.0], [24.8, 238.0], [24.9, 239.0], [25.0, 239.0], [25.1, 239.0], [25.2, 240.0], [25.3, 240.0], [25.4, 241.0], [25.5, 242.0], [25.6, 242.0], [25.7, 242.0], [25.8, 243.0], [25.9, 243.0], [26.0, 244.0], [26.1, 245.0], [26.2, 245.0], [26.3, 245.0], [26.4, 246.0], [26.5, 246.0], [26.6, 246.0], [26.7, 247.0], [26.8, 247.0], [26.9, 248.0], [27.0, 249.0], [27.1, 249.0], [27.2, 250.0], [27.3, 250.0], [27.4, 251.0], [27.5, 251.0], [27.6, 251.0], [27.7, 252.0], [27.8, 252.0], [27.9, 253.0], [28.0, 253.0], [28.1, 254.0], [28.2, 255.0], [28.3, 255.0], [28.4, 255.0], [28.5, 256.0], [28.6, 256.0], [28.7, 256.0], [28.8, 256.0], [28.9, 257.0], [29.0, 258.0], [29.1, 258.0], [29.2, 259.0], [29.3, 259.0], [29.4, 259.0], [29.5, 260.0], [29.6, 261.0], [29.7, 261.0], [29.8, 261.0], [29.9, 262.0], [30.0, 262.0], [30.1, 262.0], [30.2, 263.0], [30.3, 263.0], [30.4, 264.0], [30.5, 264.0], [30.6, 265.0], [30.7, 266.0], [30.8, 266.0], [30.9, 267.0], [31.0, 267.0], [31.1, 267.0], [31.2, 267.0], [31.3, 268.0], [31.4, 268.0], [31.5, 269.0], [31.6, 269.0], [31.7, 270.0], [31.8, 270.0], [31.9, 270.0], [32.0, 271.0], [32.1, 271.0], [32.2, 272.0], [32.3, 272.0], [32.4, 273.0], [32.5, 273.0], [32.6, 273.0], [32.7, 273.0], [32.8, 274.0], [32.9, 274.0], [33.0, 274.0], [33.1, 275.0], [33.2, 275.0], [33.3, 275.0], [33.4, 276.0], [33.5, 276.0], [33.6, 276.0], [33.7, 276.0], [33.8, 277.0], [33.9, 277.0], [34.0, 278.0], [34.1, 278.0], [34.2, 278.0], [34.3, 279.0], [34.4, 279.0], [34.5, 279.0], [34.6, 280.0], [34.7, 280.0], [34.8, 280.0], [34.9, 280.0], [35.0, 281.0], [35.1, 281.0], [35.2, 282.0], [35.3, 282.0], [35.4, 283.0], [35.5, 283.0], [35.6, 283.0], [35.7, 283.0], [35.8, 284.0], [35.9, 284.0], [36.0, 284.0], [36.1, 285.0], [36.2, 285.0], [36.3, 285.0], [36.4, 286.0], [36.5, 286.0], [36.6, 286.0], [36.7, 287.0], [36.8, 287.0], [36.9, 288.0], [37.0, 288.0], [37.1, 288.0], [37.2, 289.0], [37.3, 289.0], [37.4, 290.0], [37.5, 290.0], [37.6, 291.0], [37.7, 291.0], [37.8, 291.0], [37.9, 292.0], [38.0, 292.0], [38.1, 292.0], [38.2, 293.0], [38.3, 293.0], [38.4, 293.0], [38.5, 293.0], [38.6, 294.0], [38.7, 294.0], [38.8, 295.0], [38.9, 296.0], [39.0, 296.0], [39.1, 296.0], [39.2, 297.0], [39.3, 297.0], [39.4, 298.0], [39.5, 298.0], [39.6, 299.0], [39.7, 299.0], [39.8, 299.0], [39.9, 300.0], [40.0, 300.0], [40.1, 300.0], [40.2, 300.0], [40.3, 300.0], [40.4, 301.0], [40.5, 301.0], [40.6, 302.0], [40.7, 302.0], [40.8, 302.0], [40.9, 303.0], [41.0, 303.0], [41.1, 304.0], [41.2, 304.0], [41.3, 305.0], [41.4, 305.0], [41.5, 306.0], [41.6, 306.0], [41.7, 307.0], [41.8, 307.0], [41.9, 308.0], [42.0, 308.0], [42.1, 308.0], [42.2, 309.0], [42.3, 310.0], [42.4, 310.0], [42.5, 310.0], [42.6, 310.0], [42.7, 311.0], [42.8, 312.0], [42.9, 312.0], [43.0, 313.0], [43.1, 313.0], [43.2, 313.0], [43.3, 314.0], [43.4, 314.0], [43.5, 315.0], [43.6, 315.0], [43.7, 316.0], [43.8, 316.0], [43.9, 316.0], [44.0, 317.0], [44.1, 318.0], [44.2, 318.0], [44.3, 318.0], [44.4, 319.0], [44.5, 319.0], [44.6, 320.0], [44.7, 320.0], [44.8, 321.0], [44.9, 322.0], [45.0, 322.0], [45.1, 322.0], [45.2, 322.0], [45.3, 323.0], [45.4, 323.0], [45.5, 323.0], [45.6, 324.0], [45.7, 324.0], [45.8, 325.0], [45.9, 325.0], [46.0, 326.0], [46.1, 326.0], [46.2, 327.0], [46.3, 327.0], [46.4, 328.0], [46.5, 328.0], [46.6, 329.0], [46.7, 329.0], [46.8, 330.0], [46.9, 331.0], [47.0, 331.0], [47.1, 331.0], [47.2, 332.0], [47.3, 332.0], [47.4, 333.0], [47.5, 333.0], [47.6, 333.0], [47.7, 334.0], [47.8, 334.0], [47.9, 335.0], [48.0, 335.0], [48.1, 335.0], [48.2, 336.0], [48.3, 337.0], [48.4, 337.0], [48.5, 337.0], [48.6, 337.0], [48.7, 338.0], [48.8, 338.0], [48.9, 339.0], [49.0, 339.0], [49.1, 340.0], [49.2, 340.0], [49.3, 341.0], [49.4, 341.0], [49.5, 342.0], [49.6, 342.0], [49.7, 343.0], [49.8, 343.0], [49.9, 343.0], [50.0, 344.0], [50.1, 344.0], [50.2, 344.0], [50.3, 345.0], [50.4, 345.0], [50.5, 345.0], [50.6, 346.0], [50.7, 347.0], [50.8, 347.0], [50.9, 347.0], [51.0, 348.0], [51.1, 348.0], [51.2, 349.0], [51.3, 349.0], [51.4, 350.0], [51.5, 350.0], [51.6, 351.0], [51.7, 351.0], [51.8, 352.0], [51.9, 352.0], [52.0, 353.0], [52.1, 353.0], [52.2, 354.0], [52.3, 354.0], [52.4, 354.0], [52.5, 355.0], [52.6, 355.0], [52.7, 356.0], [52.8, 356.0], [52.9, 357.0], [53.0, 357.0], [53.1, 358.0], [53.2, 358.0], [53.3, 359.0], [53.4, 359.0], [53.5, 360.0], [53.6, 361.0], [53.7, 361.0], [53.8, 362.0], [53.9, 362.0], [54.0, 363.0], [54.1, 363.0], [54.2, 364.0], [54.3, 364.0], [54.4, 364.0], [54.5, 365.0], [54.6, 365.0], [54.7, 366.0], [54.8, 366.0], [54.9, 366.0], [55.0, 367.0], [55.1, 367.0], [55.2, 368.0], [55.3, 368.0], [55.4, 368.0], [55.5, 369.0], [55.6, 370.0], [55.7, 370.0], [55.8, 370.0], [55.9, 371.0], [56.0, 371.0], [56.1, 372.0], [56.2, 372.0], [56.3, 372.0], [56.4, 373.0], [56.5, 373.0], [56.6, 374.0], [56.7, 374.0], [56.8, 374.0], [56.9, 375.0], [57.0, 375.0], [57.1, 376.0], [57.2, 376.0], [57.3, 377.0], [57.4, 377.0], [57.5, 378.0], [57.6, 378.0], [57.7, 378.0], [57.8, 379.0], [57.9, 379.0], [58.0, 380.0], [58.1, 380.0], [58.2, 380.0], [58.3, 380.0], [58.4, 381.0], [58.5, 382.0], [58.6, 382.0], [58.7, 383.0], [58.8, 383.0], [58.9, 383.0], [59.0, 384.0], [59.1, 384.0], [59.2, 385.0], [59.3, 385.0], [59.4, 386.0], [59.5, 386.0], [59.6, 386.0], [59.7, 387.0], [59.8, 387.0], [59.9, 388.0], [60.0, 388.0], [60.1, 389.0], [60.2, 390.0], [60.3, 391.0], [60.4, 391.0], [60.5, 391.0], [60.6, 392.0], [60.7, 393.0], [60.8, 394.0], [60.9, 394.0], [61.0, 395.0], [61.1, 396.0], [61.2, 396.0], [61.3, 397.0], [61.4, 397.0], [61.5, 398.0], [61.6, 398.0], [61.7, 399.0], [61.8, 399.0], [61.9, 400.0], [62.0, 400.0], [62.1, 401.0], [62.2, 402.0], [62.3, 403.0], [62.4, 403.0], [62.5, 403.0], [62.6, 404.0], [62.7, 404.0], [62.8, 405.0], [62.9, 405.0], [63.0, 406.0], [63.1, 407.0], [63.2, 407.0], [63.3, 408.0], [63.4, 408.0], [63.5, 408.0], [63.6, 409.0], [63.7, 409.0], [63.8, 409.0], [63.9, 410.0], [64.0, 411.0], [64.1, 411.0], [64.2, 412.0], [64.3, 412.0], [64.4, 413.0], [64.5, 413.0], [64.6, 414.0], [64.7, 414.0], [64.8, 415.0], [64.9, 416.0], [65.0, 416.0], [65.1, 417.0], [65.2, 417.0], [65.3, 418.0], [65.4, 419.0], [65.5, 420.0], [65.6, 421.0], [65.7, 421.0], [65.8, 423.0], [65.9, 424.0], [66.0, 424.0], [66.1, 425.0], [66.2, 425.0], [66.3, 426.0], [66.4, 426.0], [66.5, 427.0], [66.6, 428.0], [66.7, 429.0], [66.8, 429.0], [66.9, 430.0], [67.0, 430.0], [67.1, 431.0], [67.2, 432.0], [67.3, 433.0], [67.4, 433.0], [67.5, 435.0], [67.6, 435.0], [67.7, 435.0], [67.8, 436.0], [67.9, 437.0], [68.0, 438.0], [68.1, 439.0], [68.2, 440.0], [68.3, 440.0], [68.4, 441.0], [68.5, 442.0], [68.6, 443.0], [68.7, 443.0], [68.8, 444.0], [68.9, 444.0], [69.0, 445.0], [69.1, 445.0], [69.2, 446.0], [69.3, 447.0], [69.4, 448.0], [69.5, 449.0], [69.6, 449.0], [69.7, 449.0], [69.8, 450.0], [69.9, 451.0], [70.0, 451.0], [70.1, 451.0], [70.2, 452.0], [70.3, 453.0], [70.4, 453.0], [70.5, 453.0], [70.6, 454.0], [70.7, 455.0], [70.8, 455.0], [70.9, 456.0], [71.0, 456.0], [71.1, 457.0], [71.2, 458.0], [71.3, 458.0], [71.4, 459.0], [71.5, 460.0], [71.6, 461.0], [71.7, 461.0], [71.8, 461.0], [71.9, 462.0], [72.0, 462.0], [72.1, 463.0], [72.2, 464.0], [72.3, 464.0], [72.4, 465.0], [72.5, 465.0], [72.6, 466.0], [72.7, 467.0], [72.8, 467.0], [72.9, 468.0], [73.0, 468.0], [73.1, 469.0], [73.2, 470.0], [73.3, 471.0], [73.4, 472.0], [73.5, 472.0], [73.6, 472.0], [73.7, 473.0], [73.8, 474.0], [73.9, 474.0], [74.0, 475.0], [74.1, 476.0], [74.2, 477.0], [74.3, 478.0], [74.4, 479.0], [74.5, 480.0], [74.6, 480.0], [74.7, 481.0], [74.8, 482.0], [74.9, 483.0], [75.0, 483.0], [75.1, 483.0], [75.2, 484.0], [75.3, 485.0], [75.4, 486.0], [75.5, 487.0], [75.6, 487.0], [75.7, 488.0], [75.8, 489.0], [75.9, 489.0], [76.0, 489.0], [76.1, 490.0], [76.2, 491.0], [76.3, 492.0], [76.4, 493.0], [76.5, 494.0], [76.6, 494.0], [76.7, 495.0], [76.8, 496.0], [76.9, 497.0], [77.0, 499.0], [77.1, 499.0], [77.2, 500.0], [77.3, 501.0], [77.4, 502.0], [77.5, 503.0], [77.6, 504.0], [77.7, 505.0], [77.8, 507.0], [77.9, 508.0], [78.0, 509.0], [78.1, 510.0], [78.2, 510.0], [78.3, 511.0], [78.4, 512.0], [78.5, 513.0], [78.6, 513.0], [78.7, 514.0], [78.8, 515.0], [78.9, 516.0], [79.0, 517.0], [79.1, 518.0], [79.2, 519.0], [79.3, 520.0], [79.4, 522.0], [79.5, 523.0], [79.6, 523.0], [79.7, 524.0], [79.8, 525.0], [79.9, 526.0], [80.0, 527.0], [80.1, 528.0], [80.2, 529.0], [80.3, 529.0], [80.4, 530.0], [80.5, 531.0], [80.6, 533.0], [80.7, 534.0], [80.8, 535.0], [80.9, 536.0], [81.0, 536.0], [81.1, 537.0], [81.2, 539.0], [81.3, 540.0], [81.4, 540.0], [81.5, 541.0], [81.6, 543.0], [81.7, 544.0], [81.8, 545.0], [81.9, 546.0], [82.0, 547.0], [82.1, 548.0], [82.2, 549.0], [82.3, 550.0], [82.4, 551.0], [82.5, 552.0], [82.6, 553.0], [82.7, 556.0], [82.8, 556.0], [82.9, 557.0], [83.0, 558.0], [83.1, 559.0], [83.2, 560.0], [83.3, 561.0], [83.4, 563.0], [83.5, 564.0], [83.6, 565.0], [83.7, 566.0], [83.8, 567.0], [83.9, 569.0], [84.0, 569.0], [84.1, 570.0], [84.2, 572.0], [84.3, 574.0], [84.4, 575.0], [84.5, 575.0], [84.6, 576.0], [84.7, 577.0], [84.8, 578.0], [84.9, 580.0], [85.0, 582.0], [85.1, 584.0], [85.2, 586.0], [85.3, 587.0], [85.4, 589.0], [85.5, 590.0], [85.6, 591.0], [85.7, 592.0], [85.8, 593.0], [85.9, 594.0], [86.0, 595.0], [86.1, 596.0], [86.2, 598.0], [86.3, 599.0], [86.4, 600.0], [86.5, 602.0], [86.6, 603.0], [86.7, 605.0], [86.8, 607.0], [86.9, 610.0], [87.0, 611.0], [87.1, 611.0], [87.2, 613.0], [87.3, 615.0], [87.4, 617.0], [87.5, 617.0], [87.6, 618.0], [87.7, 620.0], [87.8, 621.0], [87.9, 622.0], [88.0, 624.0], [88.1, 625.0], [88.2, 627.0], [88.3, 628.0], [88.4, 629.0], [88.5, 633.0], [88.6, 634.0], [88.7, 635.0], [88.8, 636.0], [88.9, 637.0], [89.0, 641.0], [89.1, 642.0], [89.2, 644.0], [89.3, 647.0], [89.4, 650.0], [89.5, 652.0], [89.6, 653.0], [89.7, 657.0], [89.8, 660.0], [89.9, 662.0], [90.0, 665.0], [90.1, 669.0], [90.2, 672.0], [90.3, 674.0], [90.4, 679.0], [90.5, 681.0], [90.6, 685.0], [90.7, 688.0], [90.8, 690.0], [90.9, 692.0], [91.0, 694.0], [91.1, 697.0], [91.2, 699.0], [91.3, 703.0], [91.4, 706.0], [91.5, 707.0], [91.6, 711.0], [91.7, 717.0], [91.8, 721.0], [91.9, 724.0], [92.0, 727.0], [92.1, 730.0], [92.2, 732.0], [92.3, 738.0], [92.4, 743.0], [92.5, 745.0], [92.6, 751.0], [92.7, 757.0], [92.8, 760.0], [92.9, 766.0], [93.0, 772.0], [93.1, 777.0], [93.2, 783.0], [93.3, 786.0], [93.4, 792.0], [93.5, 797.0], [93.6, 804.0], [93.7, 810.0], [93.8, 818.0], [93.9, 823.0], [94.0, 830.0], [94.1, 841.0], [94.2, 845.0], [94.3, 855.0], [94.4, 867.0], [94.5, 876.0], [94.6, 889.0], [94.7, 906.0], [94.8, 926.0], [94.9, 941.0], [95.0, 953.0], [95.1, 958.0], [95.2, 963.0], [95.3, 983.0], [95.4, 996.0], [95.5, 1001.0], [95.6, 1011.0], [95.7, 1018.0], [95.8, 1034.0], [95.9, 1040.0], [96.0, 1059.0], [96.1, 1069.0], [96.2, 1085.0], [96.3, 1105.0], [96.4, 1120.0], [96.5, 1139.0], [96.6, 1147.0], [96.7, 1177.0], [96.8, 1198.0], [96.9, 1228.0], [97.0, 1252.0], [97.1, 1303.0], [97.2, 1318.0], [97.3, 1344.0], [97.4, 1390.0], [97.5, 1410.0], [97.6, 1436.0], [97.7, 1482.0], [97.8, 1515.0], [97.9, 1586.0], [98.0, 1619.0], [98.1, 1677.0], [98.2, 1698.0], [98.3, 1733.0], [98.4, 1750.0], [98.5, 1777.0], [98.6, 1815.0], [98.7, 1864.0], [98.8, 1911.0], [98.9, 1938.0], [99.0, 2063.0], [99.1, 2150.0], [99.2, 2283.0], [99.3, 2527.0], [99.4, 2757.0], [99.5, 3166.0], [99.6, 3603.0], [99.7, 4025.0], [99.8, 4195.0], [99.9, 6772.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1197.0, "series": [{"data": [[0.0, 184.0], [600.0, 251.0], [700.0, 119.0], [800.0, 59.0], [900.0, 43.0], [1000.0, 41.0], [1100.0, 27.0], [1200.0, 15.0], [1300.0, 18.0], [1400.0, 15.0], [1500.0, 11.0], [100.0, 689.0], [1600.0, 14.0], [1700.0, 19.0], [1800.0, 11.0], [1900.0, 8.0], [2000.0, 6.0], [2100.0, 6.0], [2200.0, 2.0], [2300.0, 1.0], [2400.0, 3.0], [2500.0, 1.0], [2600.0, 2.0], [2700.0, 3.0], [3000.0, 3.0], [3100.0, 4.0], [200.0, 1197.0], [3200.0, 2.0], [3500.0, 1.0], [3700.0, 1.0], [3600.0, 3.0], [3900.0, 1.0], [4000.0, 5.0], [4100.0, 1.0], [4300.0, 1.0], [4600.0, 1.0], [4500.0, 1.0], [300.0, 1142.0], [5900.0, 1.0], [400.0, 792.0], [6700.0, 1.0], [7000.0, 2.0], [7100.0, 1.0], [7800.0, 1.0], [500.0, 480.0], [8000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 117.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4009.0, "series": [{"data": [[0.0, 4009.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1064.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 117.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.929577464788732, "minX": 1.6042212E12, "maxY": 10.0, "series": [{"data": [[1.60422132E12, 10.0], [1.60422144E12, 9.929577464788732], [1.60422126E12, 10.0], [1.60422138E12, 10.0], [1.6042212E12, 9.995680345572348]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422144E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 284.0, "minX": 1.0, "maxY": 666.0, "series": [{"data": [[8.0, 448.5], [4.0, 300.0], [2.0, 414.0], [1.0, 629.0], [9.0, 335.0], [10.0, 427.2108108108104], [5.0, 364.0], [6.0, 284.0], [3.0, 391.0], [7.0, 666.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.99094412331403, 427.212331406551]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 3024.65, "minX": 1.6042212E12, "maxY": 1.0801191733333332E7, "series": [{"data": [[1.60422132E12, 1.0801191733333332E7], [1.60422144E12, 4408078.95], [1.60422126E12, 8530506.916666666], [1.60422138E12, 8822799.333333334], [1.6042212E12, 3414921.933333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422132E12, 10605.516666666666], [1.60422144E12, 4444.066666666667], [1.60422126E12, 8150.766666666666], [1.60422138E12, 8918.766666666666], [1.6042212E12, 3024.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422144E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 363.6609071274298, "minX": 1.6042212E12, "maxY": 494.26324503311207, "series": [{"data": [[1.60422132E12, 382.26234765875597], [1.60422144E12, 401.71987480438213], [1.60422126E12, 494.26324503311207], [1.60422138E12, 453.5510976532929], [1.6042212E12, 363.6609071274298]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422144E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 359.88552915766746, "minX": 1.6042212E12, "maxY": 489.72516556291333, "series": [{"data": [[1.60422132E12, 377.93906350224535], [1.60422144E12, 398.4100156494518], [1.60422126E12, 489.72516556291333], [1.60422138E12, 450.0719152157461], [1.6042212E12, 359.88552915766746]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422144E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004139072847682122, "minX": 1.6042212E12, "maxY": 0.20086393088552926, "series": [{"data": [[1.60422132E12, 0.00833867864015395], [1.60422144E12, 0.010954616588419406], [1.60422126E12, 0.004139072847682122], [1.60422138E12, 0.0075700227100681475], [1.6042212E12, 0.20086393088552926]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422144E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.6042212E12, "maxY": 8040.0, "series": [{"data": [[1.60422132E12, 4068.0], [1.60422144E12, 3520.0], [1.60422126E12, 8040.0], [1.60422138E12, 7065.0], [1.6042212E12, 3166.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422132E12, 31.119998884201053], [1.60422144E12, 37.039999389648436], [1.60422126E12, 14.0], [1.60422138E12, 13.0], [1.6042212E12, 107.17599988937378]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422132E12, 34.44400014877319], [1.60422144E12, 40.01600036621093], [1.60422126E12, 14.0], [1.60422138E12, 13.0], [1.6042212E12, 107.5936000442505]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422132E12, 33.45999944210052], [1.60422144E12, 38.47999954223633], [1.60422126E12, 14.0], [1.60422138E12, 13.0], [1.6042212E12, 107.40799994468689]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422132E12, 2.0], [1.60422144E12, 28.0], [1.60422126E12, 4.0], [1.60422138E12, 5.0], [1.6042212E12, 30.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422132E12, 339.0], [1.60422144E12, 343.0], [1.60422126E12, 348.0], [1.60422138E12, 363.0], [1.6042212E12, 310.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422144E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 74.0, "minX": 2.0, "maxY": 3375.5, "series": [{"data": [[32.0, 293.5], [33.0, 278.5], [2.0, 1047.5], [35.0, 246.0], [34.0, 292.0], [36.0, 225.0], [37.0, 239.0], [39.0, 229.0], [38.0, 209.0], [41.0, 222.0], [3.0, 3019.0], [4.0, 3375.5], [5.0, 74.0], [6.0, 299.0], [8.0, 1073.5], [9.0, 514.0], [10.0, 1127.0], [11.0, 453.0], [12.0, 433.0], [13.0, 469.5], [14.0, 382.0], [15.0, 537.0], [16.0, 509.0], [17.0, 384.0], [18.0, 370.0], [19.0, 362.0], [20.0, 419.5], [21.0, 408.0], [22.0, 415.0], [23.0, 387.5], [24.0, 388.0], [25.0, 370.0], [26.0, 340.0], [27.0, 327.0], [28.0, 309.0], [29.0, 312.0], [30.0, 317.0], [31.0, 293.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 74.0, "minX": 2.0, "maxY": 3373.5, "series": [{"data": [[32.0, 292.0], [33.0, 276.0], [2.0, 1045.5], [35.0, 240.0], [34.0, 291.5], [36.0, 219.0], [37.0, 237.0], [39.0, 228.0], [38.0, 208.0], [41.0, 211.0], [3.0, 3017.0], [4.0, 3373.5], [5.0, 74.0], [6.0, 298.5], [8.0, 1072.0], [9.0, 511.0], [10.0, 1120.5], [11.0, 450.5], [12.0, 432.5], [13.0, 468.5], [14.0, 380.0], [15.0, 535.5], [16.0, 501.0], [17.0, 383.0], [18.0, 368.5], [19.0, 361.0], [20.0, 411.5], [21.0, 402.5], [22.0, 410.0], [23.0, 384.0], [24.0, 382.0], [25.0, 362.0], [26.0, 336.5], [27.0, 322.0], [28.0, 306.0], [29.0, 308.0], [30.0, 313.0], [31.0, 290.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.883333333333334, "minX": 1.6042212E12, "maxY": 25.983333333333334, "series": [{"data": [[1.60422132E12, 25.983333333333334], [1.60422144E12, 10.483333333333333], [1.60422126E12, 20.133333333333333], [1.60422138E12, 22.016666666666666], [1.6042212E12, 7.883333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422144E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.6042212E12, "maxY": 25.983333333333334, "series": [{"data": [[1.60422132E12, 25.983333333333334], [1.60422144E12, 10.65], [1.60422126E12, 20.133333333333333], [1.60422138E12, 22.016666666666666], [1.6042212E12, 7.716666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422144E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.6042212E12, "maxY": 25.983333333333334, "series": [{"data": [[1.60422132E12, 25.983333333333334], [1.60422144E12, 10.65], [1.60422126E12, 20.133333333333333], [1.60422138E12, 22.016666666666666], [1.6042212E12, 7.716666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422144E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.716666666666667, "minX": 1.6042212E12, "maxY": 25.983333333333334, "series": [{"data": [[1.60422132E12, 25.983333333333334], [1.60422144E12, 10.65], [1.60422126E12, 20.133333333333333], [1.60422138E12, 22.016666666666666], [1.6042212E12, 7.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422144E12, "title": "Total Transactions Per Second"}},
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

