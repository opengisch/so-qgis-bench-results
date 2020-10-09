# QGIS Benchmark summary compare-av-ohnelabel (20201009-101440)


compare rendering with no labels on different version of QGIS servers using the same settings

_run completed in 181.43s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock |       382.81 |        0    |           735 |            0 |          0 |
| qgis310-stock |       607.03 |       58.57 |           735 |            0 |          0 |
| qgis314-stock |       639.18 |       66.97 |           735 |            0 |          0 |

## Aggregated
| name                                                    |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock > somap218_grundplanav_farbig_ohne_labels |       382.81 |        0    |           735 |            0 |          0 |
| qgis310-stock > somap310_grundplanav_farbig_ohne_labels |       607.03 |       58.57 |           735 |            0 |          0 |
| qgis314-stock > somap314_grundplanav_farbig_ohne_labels |       639.18 |       66.97 |           735 |            0 |          0 |

## Detail
| name                                                                                                                                                                                                                      |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis218-stock > somap218_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201009-101440/qgis218-stock/somap218_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) |       382.81 |        0    |           735 |            0 |          0 |       520.835 |             467 |          173 |         2794 |         745.4 |         937   |       1575.92 |      18.8854 |                3062.32 |            8.53641 |
| [qgis310-stock > somap310_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201009-101440/qgis310-stock/somap310_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) |       607.03 |       58.57 |           735 |            0 |          0 |       825.886 |             844 |          131 |         3083 |        1231.2 |        1348.2 |       2220.96 |      11.9571 |                1655.65 |            5.40473 |
| [qgis314-stock > somap314_grundplanav_farbig_ohne_labels > av_f_big.txt](../results/details/compare-av-ohnelabel/20201009-101440/qgis314-stock/somap314_grundplanav_farbig_ohne_labels/av_f_big.txt/dashboard/index.html) |       639.18 |       66.97 |           735 |            0 |          0 |       869.631 |             903 |          127 |         2866 |        1292.2 |        1434.6 |       2134.16 |      11.3832 |                1576.12 |            5.14533 |

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
description: 'compare rendering with no labels on different version of QGIS servers using the same settings'

test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2

      PG_SERVICE: 'pg_service.conf'


  qgis218-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_grundplanav_farbig_ohne_labels:
        - av_f_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_grundplanav_farbig_ohne_labels:
        - av_f_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_grundplanav_farbig_ohne_labels:
        - av_f_big.txt

```
### parsed test configurations

```
description: compare rendering with no labels on different version of QGIS servers
  using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig_ohne_labels:
      - av_f_big.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig_ohne_labels:
      - av_f_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig_ohne_labels:
      - av_f_big.txt
    template: docker-compose-qgis-3-nginx

```