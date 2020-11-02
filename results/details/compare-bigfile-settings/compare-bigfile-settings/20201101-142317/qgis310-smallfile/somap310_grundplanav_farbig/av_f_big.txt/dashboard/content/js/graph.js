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
        data: {"result": {"minY": 1866.0, "minX": 0.0, "maxY": 7610.0, "series": [{"data": [[0.0, 1866.0], [0.1, 1866.0], [0.2, 1916.0], [0.3, 1922.0], [0.4, 1922.0], [0.5, 1945.0], [0.6, 2385.0], [0.7, 2425.0], [0.8, 2425.0], [0.9, 2458.0], [1.0, 2545.0], [1.1, 2576.0], [1.2, 2576.0], [1.3, 2579.0], [1.4, 2585.0], [1.5, 2598.0], [1.6, 2598.0], [1.7, 2603.0], [1.8, 2609.0], [1.9, 2609.0], [2.0, 2610.0], [2.1, 2618.0], [2.2, 2622.0], [2.3, 2622.0], [2.4, 2628.0], [2.5, 2629.0], [2.6, 2633.0], [2.7, 2633.0], [2.8, 2636.0], [2.9, 2643.0], [3.0, 2723.0], [3.1, 2723.0], [3.2, 2726.0], [3.3, 2737.0], [3.4, 2737.0], [3.5, 2740.0], [3.6, 2743.0], [3.7, 2749.0], [3.8, 2749.0], [3.9, 2766.0], [4.0, 2772.0], [4.1, 2784.0], [4.2, 2784.0], [4.3, 2792.0], [4.4, 2793.0], [4.5, 2815.0], [4.6, 2815.0], [4.7, 2831.0], [4.8, 2848.0], [4.9, 2860.0], [5.0, 2860.0], [5.1, 2882.0], [5.2, 2886.0], [5.3, 2886.0], [5.4, 2891.0], [5.5, 2894.0], [5.6, 2894.0], [5.7, 2894.0], [5.8, 2908.0], [5.9, 2909.0], [6.0, 2924.0], [6.1, 2924.0], [6.2, 2924.0], [6.3, 2926.0], [6.4, 2940.0], [6.5, 2940.0], [6.6, 2953.0], [6.7, 2963.0], [6.8, 2963.0], [6.9, 2973.0], [7.0, 2980.0], [7.1, 2986.0], [7.2, 2986.0], [7.3, 2987.0], [7.4, 2994.0], [7.5, 3009.0], [7.6, 3009.0], [7.7, 3010.0], [7.8, 3015.0], [7.9, 3030.0], [8.0, 3030.0], [8.1, 3035.0], [8.2, 3046.0], [8.3, 3051.0], [8.4, 3051.0], [8.5, 3065.0], [8.6, 3083.0], [8.7, 3083.0], [8.8, 3098.0], [8.9, 3115.0], [9.0, 3117.0], [9.1, 3117.0], [9.2, 3119.0], [9.3, 3134.0], [9.4, 3147.0], [9.5, 3147.0], [9.6, 3156.0], [9.7, 3162.0], [9.8, 3165.0], [9.9, 3165.0], [10.0, 3167.0], [10.1, 3168.0], [10.2, 3168.0], [10.3, 3169.0], [10.4, 3171.0], [10.5, 3174.0], [10.6, 3174.0], [10.7, 3175.0], [10.8, 3184.0], [10.9, 3186.0], [11.0, 3186.0], [11.1, 3187.0], [11.2, 3196.0], [11.3, 3200.0], [11.4, 3200.0], [11.5, 3202.0], [11.6, 3205.0], [11.7, 3205.0], [11.8, 3206.0], [11.9, 3207.0], [12.0, 3211.0], [12.1, 3211.0], [12.2, 3217.0], [12.3, 3225.0], [12.4, 3231.0], [12.5, 3231.0], [12.6, 3232.0], [12.7, 3242.0], [12.8, 3251.0], [12.9, 3251.0], [13.0, 3254.0], [13.1, 3259.0], [13.2, 3272.0], [13.3, 3272.0], [13.4, 3284.0], [13.5, 3289.0], [13.6, 3289.0], [13.7, 3292.0], [13.8, 3292.0], [13.9, 3292.0], [14.0, 3292.0], [14.1, 3293.0], [14.2, 3298.0], [14.3, 3348.0], [14.4, 3348.0], [14.5, 3349.0], [14.6, 3351.0], [14.7, 3360.0], [14.8, 3360.0], [14.9, 3361.0], [15.0, 3366.0], [15.1, 3366.0], [15.2, 3384.0], [15.3, 3386.0], [15.4, 3393.0], [15.5, 3393.0], [15.6, 3398.0], [15.7, 3408.0], [15.8, 3408.0], [15.9, 3408.0], [16.0, 3410.0], [16.1, 3411.0], [16.2, 3417.0], [16.3, 3417.0], [16.4, 3420.0], [16.5, 3424.0], [16.6, 3426.0], [16.7, 3426.0], [16.8, 3432.0], [16.9, 3435.0], [17.0, 3435.0], [17.1, 3435.0], [17.2, 3436.0], [17.3, 3443.0], [17.4, 3443.0], [17.5, 3444.0], [17.6, 3444.0], [17.7, 3445.0], [17.8, 3445.0], [17.9, 3453.0], [18.0, 3463.0], [18.1, 3464.0], [18.2, 3464.0], [18.3, 3468.0], [18.4, 3471.0], [18.5, 3471.0], [18.6, 3471.0], [18.7, 3475.0], [18.8, 3476.0], [18.9, 3476.0], [19.0, 3476.0], [19.1, 3477.0], [19.2, 3487.0], [19.3, 3487.0], [19.4, 3498.0], [19.5, 3516.0], [19.6, 3519.0], [19.7, 3519.0], [19.8, 3527.0], [19.9, 3538.0], [20.0, 3548.0], [20.1, 3548.0], [20.2, 3560.0], [20.3, 3565.0], [20.4, 3565.0], [20.5, 3569.0], [20.6, 3572.0], [20.7, 3586.0], [20.8, 3586.0], [20.9, 3594.0], [21.0, 3599.0], [21.1, 3600.0], [21.2, 3600.0], [21.3, 3605.0], [21.4, 3605.0], [21.5, 3607.0], [21.6, 3607.0], [21.7, 3609.0], [21.8, 3615.0], [21.9, 3615.0], [22.0, 3617.0], [22.1, 3618.0], [22.2, 3619.0], [22.3, 3619.0], [22.4, 3626.0], [22.5, 3633.0], [22.6, 3635.0], [22.7, 3635.0], [22.8, 3643.0], [22.9, 3649.0], [23.0, 3655.0], [23.1, 3655.0], [23.2, 3656.0], [23.3, 3660.0], [23.4, 3660.0], [23.5, 3663.0], [23.6, 3665.0], [23.7, 3695.0], [23.8, 3695.0], [23.9, 3700.0], [24.0, 3702.0], [24.1, 3716.0], [24.2, 3716.0], [24.3, 3733.0], [24.4, 3737.0], [24.5, 3744.0], [24.6, 3744.0], [24.7, 3766.0], [24.8, 3767.0], [24.9, 3781.0], [25.0, 3781.0], [25.1, 3784.0], [25.2, 3788.0], [25.3, 3788.0], [25.4, 3797.0], [25.5, 3801.0], [25.6, 3809.0], [25.7, 3809.0], [25.8, 3814.0], [25.9, 3815.0], [26.0, 3816.0], [26.1, 3816.0], [26.2, 3821.0], [26.3, 3826.0], [26.4, 3830.0], [26.5, 3830.0], [26.6, 3830.0], [26.7, 3872.0], [26.8, 3872.0], [26.9, 3877.0], [27.0, 3878.0], [27.1, 3881.0], [27.2, 3881.0], [27.3, 3885.0], [27.4, 3889.0], [27.5, 3899.0], [27.6, 3899.0], [27.7, 3900.0], [27.8, 3905.0], [27.9, 3907.0], [28.0, 3907.0], [28.1, 3912.0], [28.2, 3912.0], [28.3, 3912.0], [28.4, 3912.0], [28.5, 3912.0], [28.6, 3915.0], [28.7, 3915.0], [28.8, 3924.0], [28.9, 3924.0], [29.0, 3928.0], [29.1, 3928.0], [29.2, 3929.0], [29.3, 3931.0], [29.4, 3935.0], [29.5, 3935.0], [29.6, 3951.0], [29.7, 3951.0], [29.8, 3952.0], [29.9, 3952.0], [30.0, 3967.0], [30.1, 3979.0], [30.2, 3979.0], [30.3, 3980.0], [30.4, 3985.0], [30.5, 3989.0], [30.6, 3989.0], [30.7, 3994.0], [30.8, 3997.0], [30.9, 4003.0], [31.0, 4003.0], [31.1, 4010.0], [31.2, 4013.0], [31.3, 4018.0], [31.4, 4018.0], [31.5, 4018.0], [31.6, 4025.0], [31.7, 4025.0], [31.8, 4028.0], [31.9, 4033.0], [32.0, 4043.0], [32.1, 4043.0], [32.2, 4051.0], [32.3, 4057.0], [32.4, 4072.0], [32.5, 4072.0], [32.6, 4094.0], [32.7, 4101.0], [32.8, 4112.0], [32.9, 4112.0], [33.0, 4114.0], [33.1, 4122.0], [33.2, 4126.0], [33.3, 4126.0], [33.4, 4127.0], [33.5, 4128.0], [33.6, 4128.0], [33.7, 4128.0], [33.8, 4129.0], [33.9, 4132.0], [34.0, 4132.0], [34.1, 4132.0], [34.2, 4134.0], [34.3, 4137.0], [34.4, 4137.0], [34.5, 4140.0], [34.6, 4144.0], [34.7, 4145.0], [34.8, 4145.0], [34.9, 4146.0], [35.0, 4150.0], [35.1, 4150.0], [35.2, 4160.0], [35.3, 4165.0], [35.4, 4193.0], [35.5, 4193.0], [35.6, 4193.0], [35.7, 4196.0], [35.8, 4243.0], [35.9, 4243.0], [36.0, 4243.0], [36.1, 4257.0], [36.2, 4259.0], [36.3, 4259.0], [36.4, 4269.0], [36.5, 4274.0], [36.6, 4295.0], [36.7, 4295.0], [36.8, 4308.0], [36.9, 4313.0], [37.0, 4313.0], [37.1, 4327.0], [37.2, 4327.0], [37.3, 4332.0], [37.4, 4332.0], [37.5, 4334.0], [37.6, 4336.0], [37.7, 4345.0], [37.8, 4345.0], [37.9, 4345.0], [38.0, 4347.0], [38.1, 4347.0], [38.2, 4347.0], [38.3, 4348.0], [38.4, 4349.0], [38.5, 4349.0], [38.6, 4360.0], [38.7, 4368.0], [38.8, 4369.0], [38.9, 4369.0], [39.0, 4370.0], [39.1, 4372.0], [39.2, 4372.0], [39.3, 4372.0], [39.4, 4373.0], [39.5, 4384.0], [39.6, 4389.0], [39.7, 4389.0], [39.8, 4390.0], [39.9, 4394.0], [40.0, 4395.0], [40.1, 4395.0], [40.2, 4399.0], [40.3, 4412.0], [40.4, 4412.0], [40.5, 4413.0], [40.6, 4418.0], [40.7, 4419.0], [40.8, 4419.0], [40.9, 4430.0], [41.0, 4440.0], [41.1, 4446.0], [41.2, 4446.0], [41.3, 4448.0], [41.4, 4448.0], [41.5, 4451.0], [41.6, 4451.0], [41.7, 4454.0], [41.8, 4459.0], [41.9, 4459.0], [42.0, 4462.0], [42.1, 4469.0], [42.2, 4488.0], [42.3, 4488.0], [42.4, 4498.0], [42.5, 4498.0], [42.6, 4499.0], [42.7, 4499.0], [42.8, 4501.0], [42.9, 4502.0], [43.0, 4502.0], [43.1, 4502.0], [43.2, 4503.0], [43.3, 4508.0], [43.4, 4508.0], [43.5, 4509.0], [43.6, 4510.0], [43.7, 4513.0], [43.8, 4513.0], [43.9, 4515.0], [44.0, 4544.0], [44.1, 4546.0], [44.2, 4546.0], [44.3, 4547.0], [44.4, 4551.0], [44.5, 4556.0], [44.6, 4556.0], [44.7, 4559.0], [44.8, 4562.0], [44.9, 4563.0], [45.0, 4563.0], [45.1, 4569.0], [45.2, 4573.0], [45.3, 4573.0], [45.4, 4575.0], [45.5, 4579.0], [45.6, 4580.0], [45.7, 4580.0], [45.8, 4586.0], [45.9, 4594.0], [46.0, 4598.0], [46.1, 4598.0], [46.2, 4603.0], [46.3, 4608.0], [46.4, 4619.0], [46.5, 4619.0], [46.6, 4620.0], [46.7, 4623.0], [46.8, 4623.0], [46.9, 4629.0], [47.0, 4633.0], [47.1, 4636.0], [47.2, 4636.0], [47.3, 4637.0], [47.4, 4645.0], [47.5, 4646.0], [47.6, 4646.0], [47.7, 4646.0], [47.8, 4665.0], [47.9, 4666.0], [48.0, 4666.0], [48.1, 4667.0], [48.2, 4674.0], [48.3, 4678.0], [48.4, 4678.0], [48.5, 4680.0], [48.6, 4683.0], [48.7, 4683.0], [48.8, 4684.0], [48.9, 4685.0], [49.0, 4693.0], [49.1, 4693.0], [49.2, 4695.0], [49.3, 4695.0], [49.4, 4696.0], [49.5, 4696.0], [49.6, 4698.0], [49.7, 4701.0], [49.8, 4713.0], [49.9, 4713.0], [50.0, 4715.0], [50.1, 4716.0], [50.2, 4716.0], [50.3, 4720.0], [50.4, 4722.0], [50.5, 4723.0], [50.6, 4723.0], [50.7, 4724.0], [50.8, 4724.0], [50.9, 4727.0], [51.0, 4727.0], [51.1, 4731.0], [51.2, 4733.0], [51.3, 4734.0], [51.4, 4734.0], [51.5, 4734.0], [51.6, 4736.0], [51.7, 4736.0], [51.8, 4737.0], [51.9, 4737.0], [52.0, 4738.0], [52.1, 4738.0], [52.2, 4742.0], [52.3, 4745.0], [52.4, 4753.0], [52.5, 4753.0], [52.6, 4762.0], [52.7, 4764.0], [52.8, 4774.0], [52.9, 4774.0], [53.0, 4774.0], [53.1, 4775.0], [53.2, 4775.0], [53.3, 4775.0], [53.4, 4778.0], [53.5, 4778.0], [53.6, 4778.0], [53.7, 4782.0], [53.8, 4783.0], [53.9, 4786.0], [54.0, 4786.0], [54.1, 4793.0], [54.2, 4795.0], [54.3, 4797.0], [54.4, 4797.0], [54.5, 4801.0], [54.6, 4802.0], [54.7, 4802.0], [54.8, 4802.0], [54.9, 4803.0], [55.0, 4805.0], [55.1, 4805.0], [55.2, 4806.0], [55.3, 4809.0], [55.4, 4820.0], [55.5, 4820.0], [55.6, 4821.0], [55.7, 4824.0], [55.8, 4825.0], [55.9, 4825.0], [56.0, 4827.0], [56.1, 4829.0], [56.2, 4832.0], [56.3, 4832.0], [56.4, 4835.0], [56.5, 4844.0], [56.6, 4846.0], [56.7, 4846.0], [56.8, 4847.0], [56.9, 4849.0], [57.0, 4849.0], [57.1, 4853.0], [57.2, 4854.0], [57.3, 4855.0], [57.4, 4855.0], [57.5, 4856.0], [57.6, 4856.0], [57.7, 4858.0], [57.8, 4858.0], [57.9, 4863.0], [58.0, 4866.0], [58.1, 4869.0], [58.2, 4869.0], [58.3, 4873.0], [58.4, 4878.0], [58.5, 4878.0], [58.6, 4879.0], [58.7, 4888.0], [58.8, 4889.0], [58.9, 4889.0], [59.0, 4890.0], [59.1, 4890.0], [59.2, 4890.0], [59.3, 4890.0], [59.4, 4893.0], [59.5, 4894.0], [59.6, 4897.0], [59.7, 4897.0], [59.8, 4897.0], [59.9, 4898.0], [60.0, 4898.0], [60.1, 4898.0], [60.2, 4901.0], [60.3, 4902.0], [60.4, 4902.0], [60.5, 4902.0], [60.6, 4905.0], [60.7, 4905.0], [60.8, 4905.0], [60.9, 4905.0], [61.0, 4909.0], [61.1, 4910.0], [61.2, 4910.0], [61.3, 4911.0], [61.4, 4912.0], [61.5, 4916.0], [61.6, 4916.0], [61.7, 4920.0], [61.8, 4924.0], [61.9, 4924.0], [62.0, 4924.0], [62.1, 4925.0], [62.2, 4929.0], [62.3, 4929.0], [62.4, 4930.0], [62.5, 4932.0], [62.6, 4935.0], [62.7, 4935.0], [62.8, 4938.0], [62.9, 4939.0], [63.0, 4940.0], [63.1, 4940.0], [63.2, 4941.0], [63.3, 4944.0], [63.4, 4944.0], [63.5, 4950.0], [63.6, 4952.0], [63.7, 4956.0], [63.8, 4956.0], [63.9, 4957.0], [64.0, 4959.0], [64.1, 4959.0], [64.2, 4959.0], [64.3, 4966.0], [64.4, 4967.0], [64.5, 4974.0], [64.6, 4974.0], [64.7, 4976.0], [64.8, 4980.0], [64.9, 4987.0], [65.0, 4987.0], [65.1, 4988.0], [65.2, 4989.0], [65.3, 4989.0], [65.4, 4992.0], [65.5, 4993.0], [65.6, 5000.0], [65.7, 5000.0], [65.8, 5002.0], [65.9, 5006.0], [66.0, 5014.0], [66.1, 5014.0], [66.2, 5016.0], [66.3, 5023.0], [66.4, 5024.0], [66.5, 5024.0], [66.6, 5024.0], [66.7, 5026.0], [66.8, 5026.0], [66.9, 5026.0], [67.0, 5027.0], [67.1, 5030.0], [67.2, 5030.0], [67.3, 5030.0], [67.4, 5036.0], [67.5, 5036.0], [67.6, 5036.0], [67.7, 5038.0], [67.8, 5039.0], [67.9, 5039.0], [68.0, 5039.0], [68.1, 5040.0], [68.2, 5045.0], [68.3, 5047.0], [68.4, 5047.0], [68.5, 5048.0], [68.6, 5052.0], [68.7, 5052.0], [68.8, 5055.0], [68.9, 5061.0], [69.0, 5063.0], [69.1, 5063.0], [69.2, 5066.0], [69.3, 5074.0], [69.4, 5078.0], [69.5, 5078.0], [69.6, 5082.0], [69.7, 5082.0], [69.8, 5085.0], [69.9, 5085.0], [70.0, 5088.0], [70.1, 5090.0], [70.2, 5090.0], [70.3, 5091.0], [70.4, 5091.0], [70.5, 5092.0], [70.6, 5092.0], [70.7, 5093.0], [70.8, 5097.0], [70.9, 5097.0], [71.0, 5097.0], [71.1, 5104.0], [71.2, 5105.0], [71.3, 5105.0], [71.4, 5105.0], [71.5, 5108.0], [71.6, 5108.0], [71.7, 5108.0], [71.8, 5109.0], [71.9, 5110.0], [72.0, 5113.0], [72.1, 5113.0], [72.2, 5113.0], [72.3, 5123.0], [72.4, 5127.0], [72.5, 5127.0], [72.6, 5127.0], [72.7, 5127.0], [72.8, 5129.0], [72.9, 5129.0], [73.0, 5131.0], [73.1, 5134.0], [73.2, 5142.0], [73.3, 5142.0], [73.4, 5147.0], [73.5, 5147.0], [73.6, 5147.0], [73.7, 5148.0], [73.8, 5158.0], [73.9, 5159.0], [74.0, 5159.0], [74.1, 5160.0], [74.2, 5160.0], [74.3, 5161.0], [74.4, 5161.0], [74.5, 5161.0], [74.6, 5173.0], [74.7, 5174.0], [74.8, 5174.0], [74.9, 5174.0], [75.0, 5175.0], [75.1, 5175.0], [75.2, 5176.0], [75.3, 5182.0], [75.4, 5184.0], [75.5, 5184.0], [75.6, 5189.0], [75.7, 5194.0], [75.8, 5194.0], [75.9, 5194.0], [76.0, 5195.0], [76.1, 5199.0], [76.2, 5200.0], [76.3, 5200.0], [76.4, 5201.0], [76.5, 5202.0], [76.6, 5203.0], [76.7, 5203.0], [76.8, 5204.0], [76.9, 5206.0], [77.0, 5206.0], [77.1, 5206.0], [77.2, 5209.0], [77.3, 5210.0], [77.4, 5210.0], [77.5, 5214.0], [77.6, 5218.0], [77.7, 5219.0], [77.8, 5219.0], [77.9, 5222.0], [78.0, 5222.0], [78.1, 5226.0], [78.2, 5226.0], [78.3, 5227.0], [78.4, 5231.0], [78.5, 5231.0], [78.6, 5234.0], [78.7, 5243.0], [78.8, 5247.0], [78.9, 5247.0], [79.0, 5249.0], [79.1, 5249.0], [79.2, 5250.0], [79.3, 5250.0], [79.4, 5252.0], [79.5, 5253.0], [79.6, 5255.0], [79.7, 5255.0], [79.8, 5255.0], [79.9, 5263.0], [80.0, 5263.0], [80.1, 5263.0], [80.2, 5266.0], [80.3, 5277.0], [80.4, 5277.0], [80.5, 5291.0], [80.6, 5291.0], [80.7, 5300.0], [80.8, 5300.0], [80.9, 5302.0], [81.0, 5303.0], [81.1, 5306.0], [81.2, 5306.0], [81.3, 5309.0], [81.4, 5311.0], [81.5, 5314.0], [81.6, 5314.0], [81.7, 5319.0], [81.8, 5319.0], [81.9, 5319.0], [82.0, 5320.0], [82.1, 5321.0], [82.2, 5327.0], [82.3, 5327.0], [82.4, 5331.0], [82.5, 5340.0], [82.6, 5344.0], [82.7, 5344.0], [82.8, 5348.0], [82.9, 5356.0], [83.0, 5359.0], [83.1, 5359.0], [83.2, 5359.0], [83.3, 5361.0], [83.4, 5361.0], [83.5, 5362.0], [83.6, 5366.0], [83.7, 5371.0], [83.8, 5371.0], [83.9, 5372.0], [84.0, 5384.0], [84.1, 5387.0], [84.2, 5387.0], [84.3, 5395.0], [84.4, 5399.0], [84.5, 5400.0], [84.6, 5400.0], [84.7, 5407.0], [84.8, 5414.0], [84.9, 5420.0], [85.0, 5420.0], [85.1, 5425.0], [85.2, 5430.0], [85.3, 5430.0], [85.4, 5431.0], [85.5, 5432.0], [85.6, 5442.0], [85.7, 5442.0], [85.8, 5446.0], [85.9, 5455.0], [86.0, 5460.0], [86.1, 5460.0], [86.2, 5462.0], [86.3, 5477.0], [86.4, 5488.0], [86.5, 5488.0], [86.6, 5499.0], [86.7, 5505.0], [86.8, 5505.0], [86.9, 5507.0], [87.0, 5507.0], [87.1, 5515.0], [87.2, 5515.0], [87.3, 5521.0], [87.4, 5525.0], [87.5, 5533.0], [87.6, 5533.0], [87.7, 5556.0], [87.8, 5563.0], [87.9, 5574.0], [88.0, 5574.0], [88.1, 5576.0], [88.2, 5586.0], [88.3, 5594.0], [88.4, 5594.0], [88.5, 5596.0], [88.6, 5605.0], [88.7, 5605.0], [88.8, 5613.0], [88.9, 5613.0], [89.0, 5616.0], [89.1, 5616.0], [89.2, 5617.0], [89.3, 5623.0], [89.4, 5630.0], [89.5, 5630.0], [89.6, 5651.0], [89.7, 5655.0], [89.8, 5661.0], [89.9, 5661.0], [90.0, 5664.0], [90.1, 5677.0], [90.2, 5677.0], [90.3, 5684.0], [90.4, 5706.0], [90.5, 5736.0], [90.6, 5736.0], [90.7, 5756.0], [90.8, 5759.0], [90.9, 5769.0], [91.0, 5769.0], [91.1, 5780.0], [91.2, 5840.0], [91.3, 5860.0], [91.4, 5860.0], [91.5, 5861.0], [91.6, 5871.0], [91.7, 5871.0], [91.8, 5966.0], [91.9, 5986.0], [92.0, 5996.0], [92.1, 5996.0], [92.2, 6013.0], [92.3, 6034.0], [92.4, 6039.0], [92.5, 6039.0], [92.6, 6113.0], [92.7, 6144.0], [92.8, 6147.0], [92.9, 6147.0], [93.0, 6160.0], [93.1, 6209.0], [93.2, 6225.0], [93.3, 6225.0], [93.4, 6235.0], [93.5, 6303.0], [93.6, 6303.0], [93.7, 6314.0], [93.8, 6343.0], [93.9, 6391.0], [94.0, 6391.0], [94.1, 6391.0], [94.2, 6441.0], [94.3, 6475.0], [94.4, 6475.0], [94.5, 6498.0], [94.6, 6538.0], [94.7, 6579.0], [94.8, 6579.0], [94.9, 6580.0], [95.0, 6608.0], [95.1, 6608.0], [95.2, 6638.0], [95.3, 6652.0], [95.4, 6654.0], [95.5, 6654.0], [95.6, 6700.0], [95.7, 6709.0], [95.8, 6742.0], [95.9, 6742.0], [96.0, 6750.0], [96.1, 6757.0], [96.2, 6762.0], [96.3, 6762.0], [96.4, 6764.0], [96.5, 6822.0], [96.6, 6858.0], [96.7, 6858.0], [96.8, 6866.0], [96.9, 6913.0], [97.0, 6913.0], [97.1, 6929.0], [97.2, 6941.0], [97.3, 6956.0], [97.4, 6956.0], [97.5, 7014.0], [97.6, 7061.0], [97.7, 7062.0], [97.8, 7062.0], [97.9, 7093.0], [98.0, 7098.0], [98.1, 7118.0], [98.2, 7118.0], [98.3, 7120.0], [98.4, 7131.0], [98.5, 7131.0], [98.6, 7140.0], [98.7, 7152.0], [98.8, 7166.0], [98.9, 7166.0], [99.0, 7169.0], [99.1, 7225.0], [99.2, 7299.0], [99.3, 7299.0], [99.4, 7433.0], [99.5, 7435.0], [99.6, 7515.0], [99.7, 7515.0], [99.8, 7587.0], [99.9, 7610.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 1800.0, "maxY": 42.0, "series": [{"data": [[1800.0, 1.0], [1900.0, 3.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 5.0], [2600.0, 10.0], [2700.0, 11.0], [2800.0, 9.0], [2900.0, 13.0], [3000.0, 10.0], [3100.0, 18.0], [3200.0, 22.0], [3300.0, 10.0], [3400.0, 28.0], [3500.0, 12.0], [3600.0, 20.0], [3700.0, 12.0], [3800.0, 16.0], [3900.0, 24.0], [4000.0, 13.0], [4300.0, 26.0], [4200.0, 7.0], [4100.0, 23.0], [4400.0, 18.0], [4600.0, 26.0], [4500.0, 25.0], [4800.0, 42.0], [4700.0, 35.0], [4900.0, 40.0], [5000.0, 40.0], [5100.0, 38.0], [5300.0, 28.0], [5200.0, 33.0], [5500.0, 14.0], [5600.0, 13.0], [5400.0, 16.0], [5800.0, 4.0], [5700.0, 6.0], [5900.0, 3.0], [6100.0, 4.0], [6000.0, 3.0], [6300.0, 5.0], [6200.0, 3.0], [6600.0, 4.0], [6400.0, 3.0], [6500.0, 3.0], [6700.0, 7.0], [6900.0, 4.0], [6800.0, 3.0], [7100.0, 7.0], [7000.0, 5.0], [7200.0, 2.0], [7400.0, 2.0], [7600.0, 1.0], [7500.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 735.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 735.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 735.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 8.269230769230772, "minX": 1.60425354E12, "maxY": 10.0, "series": [{"data": [[1.60425384E12, 10.0], [1.60425354E12, 10.0], [1.60425372E12, 10.0], [1.6042539E12, 8.269230769230772], [1.6042536E12, 10.0], [1.60425378E12, 10.0], [1.60425366E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042539E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3167.0, "minX": 1.0, "maxY": 4578.425619834706, "series": [{"data": [[8.0, 3187.0], [4.0, 3196.0], [2.0, 3167.0], [1.0, 3586.0], [9.0, 3175.0], [10.0, 4578.425619834706], [5.0, 3232.0], [6.0, 3205.0], [3.0, 3169.0], [7.0, 3200.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.93877551020408, 4561.978231292511]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 183.11666666666667, "minX": 1.60425354E12, "maxY": 388990.9666666667, "series": [{"data": [[1.60425384E12, 314530.75], [1.60425354E12, 195203.06666666668], [1.60425372E12, 388990.9666666667], [1.6042539E12, 36506.816666666666], [1.6042536E12, 355389.36666666664], [1.60425378E12, 277851.4], [1.60425366E12, 267317.65]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60425384E12, 1048.8333333333333], [1.60425354E12, 451.48333333333335], [1.60425372E12, 1004.5666666666667], [1.6042539E12, 183.11666666666667], [1.6042536E12, 857.9833333333333], [1.60425378E12, 908.9], [1.60425366E12, 1068.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042539E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3721.653846153846, "minX": 1.60425354E12, "maxY": 5325.168141592919, "series": [{"data": [[1.60425384E12, 4308.791366906477], [1.60425354E12, 4212.150000000001], [1.60425372E12, 4351.948148148146], [1.6042539E12, 3721.653846153846], [1.6042536E12, 5325.168141592919], [1.60425378E12, 5055.966666666666], [1.60425366E12, 4286.387323943661]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042539E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3720.884615384615, "minX": 1.60425354E12, "maxY": 5323.566371681414, "series": [{"data": [[1.60425384E12, 4307.697841726619], [1.60425354E12, 4210.866666666667], [1.60425372E12, 4350.503703703701], [1.6042539E12, 3720.884615384615], [1.6042536E12, 5323.566371681414], [1.60425378E12, 5054.800000000001], [1.60425366E12, 4285.415492957747]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042539E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60425354E12, "maxY": 1.3833333333333333, "series": [{"data": [[1.60425384E12, 0.0935251798561151], [1.60425354E12, 1.3833333333333333], [1.60425372E12, 0.0962962962962963], [1.6042539E12, 0.0], [1.6042536E12, 0.11504424778761065], [1.60425378E12, 0.125], [1.60425366E12, 0.10563380281690143]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042539E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1866.0, "minX": 1.60425354E12, "maxY": 7610.0, "series": [{"data": [[1.60425384E12, 6039.0], [1.60425354E12, 7610.0], [1.60425372E12, 7140.0], [1.6042539E12, 5263.0], [1.6042536E12, 7587.0], [1.60425378E12, 7225.0], [1.60425366E12, 5477.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60425384E12, 2856.8399988651277], [1.60425354E12, 2576.0], [1.60425372E12, 2459.4959950065613], [1.6042539E12, 2737.0], [1.6042536E12, 3766.3899995923043], [1.60425378E12, 3879.0309977209567], [1.60425366E12, 1880.3499982953072]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60425384E12, 2861.124000453949], [1.60425354E12, 2576.0], [1.60425372E12, 2478.3456019973755], [1.6042539E12, 2737.0], [1.6042536E12, 3767.9290001630784], [1.60425378E12, 3887.634100911617], [1.60425366E12, 1886.7850006818771]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60425384E12, 2859.219999432564], [1.60425354E12, 2576.0], [1.60425372E12, 2469.9679975032805], [1.6042539E12, 2737.0], [1.6042536E12, 3767.244999796152], [1.60425378E12, 3883.810498860478], [1.60425366E12, 1883.9249991476536]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60425384E12, 2848.0], [1.60425354E12, 2576.0], [1.60425372E12, 2425.0], [1.6042539E12, 2737.0], [1.6042536E12, 3766.0], [1.60425378E12, 3872.0], [1.60425366E12, 1866.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60425384E12, 4412.0], [1.60425354E12, 3601.5], [1.60425372E12, 4112.0], [1.6042539E12, 3218.5], [1.6042536E12, 5109.0], [1.60425378E12, 5026.0], [1.60425366E12, 4621.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042539E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3293.5, "minX": 1.0, "maxY": 5200.0, "series": [{"data": [[2.0, 4905.0], [1.0, 5200.0], [4.0, 3293.5], [5.0, 4213.0], [3.0, 4264.0], [6.0, 3868.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3293.0, "minX": 1.0, "maxY": 5199.0, "series": [{"data": [[2.0, 4903.0], [1.0, 5199.0], [4.0, 3293.0], [5.0, 4213.0], [3.0, 4264.0], [6.0, 3868.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.26666666666666666, "minX": 1.60425354E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60425384E12, 2.316666666666667], [1.60425354E12, 1.1666666666666667], [1.60425372E12, 2.25], [1.6042539E12, 0.26666666666666666], [1.6042536E12, 1.8833333333333333], [1.60425378E12, 2.0], [1.60425366E12, 2.3666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042539E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.60425354E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60425384E12, 2.316666666666667], [1.60425354E12, 1.0], [1.60425372E12, 2.25], [1.6042539E12, 0.43333333333333335], [1.6042536E12, 1.8833333333333333], [1.60425378E12, 2.0], [1.60425366E12, 2.3666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6042539E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.60425354E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60425384E12, 2.316666666666667], [1.60425354E12, 1.0], [1.60425372E12, 2.25], [1.6042539E12, 0.43333333333333335], [1.6042536E12, 1.8833333333333333], [1.60425378E12, 2.0], [1.60425366E12, 2.3666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042539E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.43333333333333335, "minX": 1.60425354E12, "maxY": 2.3666666666666667, "series": [{"data": [[1.60425384E12, 2.316666666666667], [1.60425354E12, 1.0], [1.60425372E12, 2.25], [1.6042539E12, 0.43333333333333335], [1.6042536E12, 1.8833333333333333], [1.60425378E12, 2.0], [1.60425366E12, 2.3666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6042539E12, "title": "Total Transactions Per Second"}},
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

