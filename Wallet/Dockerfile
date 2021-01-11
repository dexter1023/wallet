FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build-env
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y build-essential nodejs
WORKDIR /app
COPY *.csproj ./
RUN dotnet restore
CMD /bin/bash ./entrypoint.sh
COPY . ./
RUN dotnet publish -c Release -o out
FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
WORKDIR /app
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "Wallet.dll"]