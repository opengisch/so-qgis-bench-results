# QGIS Benchmark summary compare-webserver (20201027-005020)


compare different settings on version of 3.10

_run completed in 00h 01m 59s_
## Summary plot
An interactive summary plot can be found [here](report_compare-webserver_20201027-005020_plot.html)

## Summary
| name           | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-nginx  | Global  |        173.4 |               0   |            72 |            0 |     2330.5 |    2062.67 |     1915.8 |      58.5 |   27.1667 |       0.4 |          0 |
| qgis310-caddy  | Global  |        174.9 |               0.9 |            72 |            0 |     2339.1 |    2096.7  |     1930.4 |      56.4 |   26.3667 |       8.6 |          0 |
| qgis310-apache | Global  |        177.1 |               2.1 |            72 |            0 |     2578.6 |    2102.23 |     1944.8 |      53.7 |   24.8333 |      12.3 |          0 |

## Aggregated
| name                                         | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-caddy > somap310_grundplanav_farbig  | somap_grundplanav_farbig |         88.6 |               0   |            22 |            0 |     2339.1 |     2160   |     2036.5 |      55.2 |      29.8 |      25.3 |          0 |
| qgis310-nginx > somap310_grundplanav_farbig  | somap_grundplanav_farbig |         90.7 |               2.4 |            22 |            0 |     2330.5 |     2142.2 |     2005.7 |      54.1 |      29.4 |      24.9 |          0 |
| qgis310-apache > somap310_grundplanav_farbig | somap_grundplanav_farbig |         91.7 |               3.5 |            22 |            0 |     2578.6 |     2175.7 |     1944.8 |      44   |      29.1 |      24.4 |          0 |
| qgis310-nginx > somap310_grundplanav_sw      | somap_grundplanav_sw     |         67.4 |               0   |            20 |            0 |     2154.9 |     2086.5 |     2022.7 |      58.5 |      30.9 |      25.2 |          0 |
| qgis310-caddy > somap310_grundplanav_sw      | somap_grundplanav_sw     |         68.8 |               2   |            20 |            0 |     2274.5 |     2132.2 |     2059.3 |      56.4 |      25.2 |      12.5 |          0 |
| qgis310-apache > somap310_grundplanav_sw     | somap_grundplanav_sw     |         69.8 |               3.6 |            20 |            0 |     2313.5 |     2126.3 |     2058.9 |      53.7 |      23.7 |      12.9 |          0 |
| qgis310-nginx > somap310_lk                  | somap_lk                 |         15.2 |               0   |            30 |            0 |     1981.1 |     1959.3 |     1915.8 |      36.6 |      21.2 |       0.4 |          0 |
| qgis310-apache > somap310_lk                 | somap_lk                 |         15.5 |               2   |            30 |            0 |     2006   |     2004.7 |     2003.3 |      31.1 |      21.7 |      12.3 |          0 |
| qgis310-caddy > somap310_lk                  | somap_lk                 |         17.6 |              15.3 |            30 |            0 |     2050.7 |     1997.9 |     1930.4 |      35   |      24.1 |       8.6 |          0 |

## Detail
| name                                                                                                                                                                                     | group                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-caddy > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201027-005020/qgis310-caddy/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |         88.6 |               0   |            22 |            0 |          0 |      4025.82  |          4062   |         2833 |         5321 |        5083.7 |       5307.95 |          5321 |      2.05993 |                268.58  |           0.877809 |     2339.1 |     2160   |     2036.5 |      55.2 |      29.8 |      25.3 |
| [qgis310-nginx > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201027-005020/qgis310-nginx/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |         90.7 |               2.4 |            22 |            0 |          0 |      4122     |          4165.5 |         2946 |         5494 |        5292.4 |       5486.8  |          5494 |      2.03534 |                265.393 |           0.867333 |     2330.5 |     2142.2 |     2005.7 |      54.1 |      29.4 |      24.9 |
| [qgis310-apache > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201027-005020/qgis310-apache/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |         91.7 |               3.5 |            22 |            0 |          0 |      4167.59  |          4165   |         2963 |         5624 |        5285.2 |       5589.2  |          5624 |      2.01428 |                262.709 |           0.858359 |     2578.6 |     2175.7 |     1944.8 |      44   |      29.1 |      24.4 |
| [qgis310-nginx > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201027-005020/qgis310-nginx/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |         67.4 |               0   |            20 |            0 |          0 |      3371.9   |          3279   |         2266 |         4332 |        4296.2 |       4330.45 |          4332 |      2.23164 |                694.374 |           0.934501 |     2154.9 |     2086.5 |     2022.7 |      58.5 |      30.9 |      25.2 |
| [qgis310-caddy > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201027-005020/qgis310-caddy/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |         68.8 |               2   |            20 |            0 |          0 |      3438.55  |          3270   |          868 |         6540 |        6039.6 |       6519.15 |          6540 |      1.82882 |                569.019 |           0.765819 |     2274.5 |     2132.2 |     2059.3 |      56.4 |      25.2 |      12.5 |
| [qgis310-apache > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201027-005020/qgis310-apache/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |         69.8 |               3.6 |            20 |            0 |          0 |      3492.05  |          3242   |          883 |         6767 |        6338.2 |       6749.85 |          6767 |      1.7846  |                555.33  |           0.747301 |     2313.5 |     2126.3 |     2058.9 |      53.7 |      23.7 |      12.9 |
| [qgis310-nginx > somap310_lk > lk.txt](../results/details/compare-webserver/20201027-005020/qgis310-nginx/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |         15.2 |               0   |            30 |            0 |          0 |       507.667 |           476   |          246 |          922 |         807.7 |        905.5  |           922 |     14.6128  |                396.106 |           5.96117  |     1981.1 |     1959.3 |     1915.8 |      36.6 |      21.2 |       0.4 |
| [qgis310-apache > somap310_lk > lk.txt](../results/details/compare-webserver/20201027-005020/qgis310-apache/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         15.5 |               2   |            30 |            0 |          0 |       517.667 |           509.5 |          118 |          996 |         873.9 |        941    |           996 |     13.1521  |                356.915 |           5.36531  |     2006   |     2004.7 |     2003.3 |      31.1 |      21.7 |      12.3 |
| [qgis310-caddy > somap310_lk > lk.txt](../results/details/compare-webserver/20201027-005020/qgis310-caddy/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |         17.6 |              15.3 |            30 |            0 |          0 |       585.133 |           502   |          446 |          953 |         898.8 |        925.5  |           953 |     13.1119  |                355.307 |           5.3489   |     2050.7 |     1997.9 |     1930.4 |      35   |      24.1 |       8.6 |

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
description: 'compare different settings on version of 3.10'

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
description: compare different settings on version of 3.10
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