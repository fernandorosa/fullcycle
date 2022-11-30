FROM golang as build

COPY example/ /example/

WORKDIR /

RUN go build /example/hello.go

FROM scratch

WORKDIR /

COPY --from=build hello hello

ENTRYPOINT [ "./hello"]