# https://hub.docker.com/_/microsoft-dotnet
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /source
# copy csproj and restore as distinct layers
COPY *.sln .
COPY WebApplication1/*.csproj ./WebApplication1/
RUN dotnet restore
# copy everything else and build app
COPY WebApplication1/. ./WebApplication1/
WORKDIR /source/WebApplication1
RUN dotnet publish -c release -o /app

# final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app ./
EXPOSE 80
ENTRYPOINT ["dotnet", "WebApplication1.dll"]