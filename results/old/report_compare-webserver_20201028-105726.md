# QGIS Benchmark summary compare-webserver (20201028-105726)


compare different webservers in front of of 3.10

_run completed in 00h 02m 03s_
## Summary plot
An interactive summary plot can be found [here](report_compare-webserver_20201028-105726_plot.html)

## Summary
| name           | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-nginx  | Global  |        180.9 |          8433   |               0   |            72 |            0 |     2885.4 |    2385.1  |     2178.6 |      46.4 |   28.3667 |      11.9 |          0 |
| qgis310-apache | Global  |        181.8 |          8369.5 |               0.5 |            72 |            0 |     2652.5 |    2397.07 |     2246.3 |      46.9 |   26.2333 |       9.4 |          0 |
| qgis310-caddy  | Global  |        184.1 |          8523   |               1.8 |            72 |            0 |     2822.1 |    2404.77 |     2264   |      62.5 |   25.3    |       9.3 |          0 |

## Aggregated
| name                                         | group                    |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------|--------------------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-apache > somap310_grundplanav_farbig | somap_grundplanav_farbig |         94.1 |          4206.5 |               0   |            22 |            0 |     2652.5 |     2504.3 |     2264.4 |      46.4 |      29.6 |      24.9 |          0 |
| qgis310-nginx > somap310_grundplanav_farbig  | somap_grundplanav_farbig |         95.6 |          4388   |               1.6 |            22 |            0 |     2885.4 |     2480.9 |     2251.5 |      46.4 |      29.8 |      25   |          0 |
| qgis310-caddy > somap310_grundplanav_farbig  | somap_grundplanav_farbig |         96.4 |          4424.5 |               2.5 |            22 |            0 |     2822.1 |     2501   |     2284.1 |      62.5 |      29.6 |      25.3 |          0 |
| qgis310-nginx > somap310_grundplanav_sw      | somap_grundplanav_sw     |         68.9 |          3506   |               0   |            20 |            0 |     2691.1 |     2433.2 |     2299.9 |      45.6 |      29.9 |      17.8 |          0 |
| qgis310-caddy > somap310_grundplanav_sw      | somap_grundplanav_sw     |         69.2 |          3566   |               0.6 |            20 |            0 |     2613.4 |     2435.4 |     2336.9 |      58.9 |      26   |      12.9 |          0 |
| qgis310-apache > somap310_grundplanav_sw     | somap_grundplanav_sw     |         70.7 |          3588   |               2.6 |            20 |            0 |     2600.9 |     2416.3 |     2321.3 |      46.9 |      27.4 |      12.7 |          0 |
| qgis310-nginx > somap310_lk                  | somap_lk                 |         16.4 |           539   |               0   |            30 |            0 |     2282.1 |     2241.2 |     2178.6 |      36.3 |      25.4 |      11.9 |          0 |
| qgis310-apache > somap310_lk                 | somap_lk                 |         17.1 |           575   |               3.8 |            30 |            0 |     2295   |     2270.6 |     2246.3 |      34.1 |      21.7 |       9.4 |          0 |
| qgis310-caddy > somap310_lk                  | somap_lk                 |         18.5 |           532.5 |              12.4 |            30 |            0 |     2291.8 |     2277.9 |     2264   |      31.3 |      20.3 |       9.3 |          0 |

## Detail
| name                                                                                                                                                                                     | group                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-apache > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201028-105726/qgis310-apache/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |         94.1 |               0   |            22 |            0 |          0 |       4277.55 |          4206.5 |         2906 |         5883 |        5327   |       5804.1  |          5883 |      1.94398 |                253.54  |           0.8284   |     2652.5 |     2504.3 |     2264.4 |      46.4 |      29.6 |      24.9 |
| [qgis310-nginx > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201028-105726/qgis310-nginx/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |         95.6 |               1.6 |            22 |            0 |          0 |       4346    |          4388   |         3172 |         5823 |        5586   |       5815.8  |          5823 |      1.95486 |                254.899 |           0.833037 |     2885.4 |     2480.9 |     2251.5 |      46.4 |      29.8 |      25   |
| [qgis310-caddy > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201028-105726/qgis310-caddy/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |         96.4 |               2.5 |            22 |            0 |          0 |       4382.86 |          4424.5 |         2951 |         5876 |        5470.3 |       5831.3  |          5876 |      1.91055 |                249.104 |           0.814155 |     2822.1 |     2501   |     2284.1 |      62.5 |      29.6 |      25.3 |
| [qgis310-nginx > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201028-105726/qgis310-nginx/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |         68.9 |               0   |            20 |            0 |          0 |       3443.25 |          3506   |         1753 |         5116 |        4656   |       5094.3  |          5116 |      2.1245  |                661.035 |           0.889632 |     2691.1 |     2433.2 |     2299.9 |      45.6 |      29.9 |      17.8 |
| [qgis310-caddy > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201028-105726/qgis310-caddy/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |         69.2 |               0.6 |            20 |            0 |          0 |       3462.35 |          3566   |         1808 |         5519 |        4966   |       5494.95 |          5519 |      1.91205 |                594.914 |           0.800669 |     2613.4 |     2435.4 |     2336.9 |      58.9 |      26   |      12.9 |
| [qgis310-apache > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201028-105726/qgis310-apache/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |         70.7 |               2.6 |            20 |            0 |          0 |       3533.1  |          3588   |         2119 |         5300 |        4759.4 |       5274.3  |          5300 |      1.91278 |                595.216 |           0.800976 |     2600.9 |     2416.3 |     2321.3 |      46.9 |      27.4 |      12.7 |
| [qgis310-nginx > somap310_lk > lk.txt](../results/details/compare-webserver/20201028-105726/qgis310-nginx/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |         16.4 |               0   |            30 |            0 |          0 |        547.8  |           539   |          272 |          951 |         854.8 |        941.65 |           951 |     13.6116  |                368.968 |           5.55276  |     2282.1 |     2241.2 |     2178.6 |      36.3 |      25.4 |      11.9 |
| [qgis310-apache > somap310_lk > lk.txt](../results/details/compare-webserver/20201028-105726/qgis310-apache/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         17.1 |               3.8 |            30 |            0 |          0 |        568.6  |           575   |          107 |         1081 |         992   |       1039.2  |          1081 |     12.1951  |                330.944 |           4.97491  |     2295   |     2270.6 |     2246.3 |      34.1 |      21.7 |       9.4 |
| [qgis310-caddy > somap310_lk > lk.txt](../results/details/compare-webserver/20201028-105726/qgis310-caddy/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |         18.5 |              12.4 |            30 |            0 |          0 |        615.7  |           532.5 |          468 |          997 |         932.2 |        964    |           997 |     12.5209  |                339.291 |           5.1078   |     2291.8 |     2277.9 |     2264   |      31.3 |      20.3 |       9.3 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different webservers in front of of 3.10'

test-cases:
  qgis310-nginx:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

  qgis310-apache:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-apache


  qgis310-caddy:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-caddy

```
### parsed test configurations

```
description: compare different webservers in front of of 3.10
test-cases:
  qgis310-apache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-proxy-qgis-3-apache
  qgis310-caddy:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-proxy-qgis-3-caddy
  qgis310-nginx:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```