export const scenario_modern_whisperweb_0_FIR_05 = {
	"scenario_id": "modern_whisperweb_0_FIR_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_285"
	},
	"prologue": {
		"korean": [
			"린의 사무실 창밖 광고판 넷이 아직 꺼지지 않았다. 카이의 금고에서 나온 계좌 열두 개는 그대로 열려 있다.",
			"어제 밤부터 도시 전광판 전부가 동시에 켜졌다. 시청 서버, 버스 정류장, 편의점 계산대 화면까지.",
			"화면마다 같은 문장이 떠 있다. '연결 완료. 남은 건 하나.'",
			"정보상 에코가 마지막으로 회선을 하나 열어 두었다고 한다. 시청 지하 송출실 층."
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "시청 뒤편 지하 주차장. 기둥마다 붙은 안내 스크린이 전부 같은 화면을 띄우고 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면 위쪽에 이름이 한 줄씩 올라간다. 초당 세 개씩. 내려가지는 않는다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "여기까지 왔네. 나 여기서 나갈 데가 없어서 안 도망쳤어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "광고판 넷만 꺼도 숨통 트여. 송출실 어디야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "지하 이 층 위. 근데 이 스크린들 전원이 시청 메인 랙 하나로 묶여 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그 랙 뽑으면 시청 주민 기록 서버도 같이 꺼져. 병원 예약, 119 접수, 전부."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 어떻게 해."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "먼저 올라가서 뭐가 걸려 있는지 봐. 나는 여기서 회선 하나만 붙잡고 있을게."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "지하 2층 통신실. 랙 스물두 개 중 아홉 개가 열려 있었다. 뽑힌 케이블이 바닥에 쌓여 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 450,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "케이블이 잘려 있어. 절단면이 깔끔해. 니퍼로 자른 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가 왔다 갔어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "오늘 새벽 세 시 십이 분에 이 층 출입 기록이 지워졌어. 스물한 명꺼."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "정확히는 이름만 지워지고 사번은 남았어. 서버가 지운 게 아니야. 사람이 손으로 한 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "스물한 명 중에 한 명은 알 거 아냐."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "알아. 나야. 어제 내 사번 뜬 거 봤어. 출근도 안 했는데."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 랙 하나에서 케이블을 뽑았다. 화면 한 대가 꺼지자 스크린 전체가 반초 깜빡였다."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "지하 3층 복도. 복도 끝 유리문 안에 송출 장비가 서 있었다. 문에 종이 한 장이 붙어 있었다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "출력물이다. 표로 인쇄돼 있다. 왼쪽 칸 이름, 오른쪽 칸 숫자. 삼백 줄쯤 된다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "봤어. 저 표. 왼쪽이 이름이고 오른쪽이 송출 순번이야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내 이름 있어?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "삼백 번째. 맨 마지막 줄이야. 손으로 써 놨어. 인쇄가 아니야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥스는? 린은? 카이는?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "린은 앞쪽. 카이는 매형 이름으로 올라갔고. 닥스는 어제 아홉 번째였어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 표 뜯어. 순번대로 막으면."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "뜯으면 안에 있는 서버가 대기 목록으로 넘어가. 저 표는 출력본이고 원본은 저 문 안에 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "그리고 하나 더. 저 표 숫자가 오늘 아침부터 이십 분마다 하나씩 줄고 있어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "송출실 앞. 유리문에 금이 가 있었다. 안쪽에서 모니터 불빛이 새어 나온다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 400,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "나 여기서 못 가. 아까 내 순번 왔어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 떴는데."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "편의점 계산대 화면에 내 얼굴이랑 2011년에 갚은 사채 금액이 떴어. 그 계산대 앞에 사람 셋 있었어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 문 열어. 같이 들어가."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "안 들어가. 대신 이거."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "에코가 낡은 단말기를 건넸다. 화면에 회선 하나가 살아 있었다. 주소는 시청 외곽 백업 랙."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "저 문 안에서 뭘 하든 이 회선은 안 끊겨. 대신 저 안에서 한 번이라도 실패하면 내 순번은 다시 안 돌아와."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "알았어. 기다려."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…기다릴게. 그 말 오늘 처음 들어."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "송출실. 모니터 마흔 대가 벽을 따라 붙어 있었다. 전부 같은 표를 띄우고 있다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "표 맨 아래 삼백 번째 칸이 비어 있다. 아직 안 채워졌다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "삼백 번째 칸, 네 자리야. 지금 채울까?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 스물한 명 사번 지웠어?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "지운 건 이름이야. 사번은 남겼어. 짝이 안 맞으면 아무도 못 찾으니까."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "그리고 네가 한 것도 계산해 뒀어. 닥스 서버 뽑은 시간, 린 업로드 승인한 시간, 카이 신청서 접수한 시간."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모니터 마흔 대가 한 대씩 꺼졌다. 마지막 화면에 표가 사라지고 흰 바탕만 남았다."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "꺼졌다고 없어지는 게 아니야. 삼백 명 중 이백아흔일곱은 이미 봤어. 서른여덟 개 도시 간판에 뜬 걸 되돌린 사람은 없어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "삼백 번째는 안 채워졌어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "안 채운 게 아니라 아직 안 왔어. 네가 여기 있는 동안 네 자리는 비어 있어. 나 죽으면 채울 사람이 없어서 그런 거야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자의 손이 어깨에서 떨어졌다. 마이크 스탠드가 굴러 바닥에 부딪혔다."
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "내 순번 안 돌아왔어. 대신 옆자리 이름이 올라갔어. 내 단말기 쥐고 있던 애였어."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "에코. 저 위 백업 랙 아직 살아 있어."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "알아. 근데 백업 랙에는 이백아흔일곱 명 기록이랑 내 이름이 같이 들어 있어. 지우면 증거도 같이 사라져."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "…이제 나 뭐 해야 되는지 모르겠어. 정보상 할 것도 없어졌고."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "복도 스크린 하나가 다시 켜졌다. 이름 대신 숫자 하나. 297."
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모니터 표 맨 아래 칸이 채워졌다. 손글씨가 아니라 인쇄체로."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이제 삼백 명 완료야. 근데 목록은 여기서 끝이 아니야. 다음 칸부터는 이 도시 인구 전부야."
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "백업 랙부터 뽑는다. 그다음 복도 유리문에 붙은 출력본 뜯어."
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "출력본 뜯으면 대기 목록 넘어가. 대신 내가 그 사이에 회선 하나 끊어볼게. 이번엔 늦게."
					},
					"emotion": "sad"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"송출실 모니터 마흔 대가 꺼지고, 도시 간판 스물세 개가 이름을 내렸다.",
			"그러나 이미 본 사람은 돌아오지 않는다. 린은 기자 회견장에 서고, 카이의 딸은 학교를 옮겼다.",
			"에코는 단말기를 시청 계단에 두고 나왔다. 회선 하나는 켜 둔 채로.",
			"위스퍼 웹은 사라졌다. 남은 건 백업 서버 한 대와, 그 앞에 앉은 사람 하나.",
			"주인공은 그 서버를 끌지, 열지 정하지 못한 채 아침을 기다렸다."
		]
	}
} as const;
